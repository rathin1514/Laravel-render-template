import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import { getPlanById } from "../../api_admin";
import { getPlanExercises, addPlanToUser } from "../../api_user";

function TrainingPlanDetailUser() {
    const { id } = useParams();
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();

    const [planData, setPlanData] = useState(null);
    const [exercises, setExercises] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isAddedToUserPlans, setIsAddedToUserPlans] = useState(false);

    const handleVideoClick = (videoUrl) => {
        const match = videoUrl.match(
            /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
        );
        if (match && match[1]) {
            setSelectedVideo(match[1]);
        } else {
            console.error("Invalid YouTube URL:", videoUrl);
            alert("Invalid video URL. Please check the video link.");
        }
    };

    const closeModal = () => setSelectedVideo(null);

    useEffect(() => {
        const fetchPlanData = async () => {
            try {
                const plan = await getPlanById(id, auth.token);
                setPlanData(plan);

                const fetchedExercises = await getPlanExercises(id, auth.token);
                setExercises(fetchedExercises || []);
            } catch (error) {
                console.error("Error loading training plan data:", error);
            }
        };

        fetchPlanData();
    }, [id, auth.token]);

    const handleAddToUserPlans = async () => {
        try {
            await addPlanToUser(id, auth.token);
            setIsAddedToUserPlans(true);
            alert("Plan was successfully added to your list");
        } catch (error) {
            console.error("Error adding plan to user plans:", error);
            alert("Error while adding, try again");
        }
    };

    const handleCancel = () => {
        navigate("/user/trainings");
    };

    return (
        <div className="trainingplan-container container-lg p-4">
            <div className="card p-3 border-0 exercise-card">
                <div className="col d-flex align-items-start">
                    <i
                        className="fas fa-solid fa-circle-arrow-left fa-2x me-4 mt-2 icon-hover"
                        style={{ cursor: "pointer" }}
                        onClick={handleCancel}
                    ></i>
                    <h2 className="header-font-size-small mb-0 ">{planData?.title || "Training Plan"}</h2>
                </div>
                <p className="text-muted">{planData?.description}</p>

                <div className="row justify-content-center row-gap-3">
                    {exercises.length > 0 ? (
                        exercises.map((exercise) => (
                            <div
                                key={exercise.exercise_id}
                                className="card border-0"
                                style={{ width: "100%" }}
                            >
                                <div className="d-flex align-items-center">
                                    <img
                                        src="/images/training/example1.webp"
                                        className="me-1 card-img-training-plan-detail-user"
                                        alt={exercise.name || "Exercise Image"}
                                        style={{ width: "12rem", height: "7rem", cursor: "pointer" }}
                                        onClick={() => handleVideoClick(exercise.video_url)}
                                    />
                                    <div className="card-body text-start d-inline">
                                        <div className="col d-flex align-items-start">
                                            <h5 className="card-title">{exercise.name}</h5>
                                        </div>
                                        <p className="card-text">{exercise.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-muted">No exercises for this plan</p>
                    )}
                </div>

                <div className="d-flex justify-content-center">
                    {!isAddedToUserPlans && (
                        <button
                            className="btn-font card-button-training-plans py-2 mb-4"
                            style={{ width: "40%" }}
                            type="button"
                            onClick={handleAddToUserPlans}
                        >
                            Add to My Plans
                        </button>
                    )}
                </div>
            </div>

            {selectedVideo && (
                <div className="video-modal">
                    <div className="video-overlay" onClick={closeModal}></div>
                    <div className="video-content">
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${selectedVideo}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <button className="btn-close-modal" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TrainingPlanDetailUser;
