import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/homepage_style.css';

function Recipes() {
  return (
    <section className="menu bg-gray" id="menu">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 text-center mb-5 mt-5 header-white">
            <h1>100+ delicious recipes</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6 col-sm-12 mb-5 mt-2 d-flex justify-content-center">
            <div className="card-flip">
              <div className="card-inner-flip">
                <div className="card-front-flip text-center">
                  <img src="images/menu/scrumble.png" alt="Egg and Veggie Scramble"
                    className="img-fluid rounded-top" />
                    <p className="mt-4 p-3">Time to refuel and recover!</p>
                </div>
                <div className="card-back-flip">
                  <p className="text-center p-3"><strong>Egg and Veggie Scramble</strong><br/>A balanced
                    breakfast
                    option high in protein, great for building muscle and staying satisfied.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12 mb-5 mt-2 d-flex justify-content-center">
            <div className="card-flip">
              <div className="card-inner-flip">
                <div className="card-front-flip text-center">
                  <img src="images/menu/quinoa_salad.png" alt="Quinoa Salad with Avocado"
                    className="img-fluid rounded-top" />
                    <p className="mt-4 p-3">Light and fresh! Ready to keep it lean?</p>
                </div>
                <div className="card-back-flip">
                  <p className="text-center p-3"><strong>Quinoa Salad with Avocado</strong><br/>A fiber-rich,
                    low-calorie meal, ideal for weight management and a quick energy boost.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12 mb-5 mt-2 d-flex justify-content-center">
            <div className="card-flip">
              <div className="card-inner-flip">
                <div className="card-front-flip text-center">
                  <img src="images/menu/chia_pudding.png" alt="Chia Pudding with Fresh Fruit"
                    className="img-fluid rounded-top"/>
                    <p className="mt-4 p-3">Need a guilt-free treat? Indulge without the extra calories!</p>
                </div>
                <div className="card-back-flip">
                  <p className="text-center p-3"><strong>Chia Pudding with Fresh Fruit</strong><br/>A
                    low-calorie
                    dessert full of fiber and antioxidants to support weight loss goals.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12 mb-5 mt-2 d-flex justify-content-center">
            <div className="card-flip">
              <div className="card-inner-flip">
                <div className="card-front-flip text-center">
                  <img src="images/menu/grilled_salmon.png" alt="Grilled Salmon with Steamed Veggies"
                    className="img-fluid rounded-top" />
                    <p className="mt-4 p-3">Feeling hungry? Let’s fuel up the right way!</p>
                </div>
                <div className="card-back-flip">
                  <p className="text-center p-3"><strong>Grilled Salmon with Steamed Veggies</strong><br/>A
                    nutrient-packed meal that supports weight loss and keeps you satisfied with healthy
                    fats and protein.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12 mb-5 mt-2 d-flex justify-content-center">
            <div className="card-flip">
              <div className="card-inner-flip">
                <div className="card-front-flip text-center">
                  <img src="images/menu/zucchini_pasta.png" alt="Zucchini Noodles with Pesto"
                    className="img-fluid rounded-top" />
                    <p className="mt-4 p-3">Light but satisfying? You’ve got it!</p>
                </div>
                <div className="card-back-flip">
                  <p className="text-center p-3"><strong>Zucchini Noodles with Pesto</strong><br/>A low-carb,
                    fresh, and flavorful meal that supports weight loss without skimping on taste.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12 mb-5 mt-2 d-flex justify-content-center">
            <div className="card-flip">
              <div className="card-inner-flip">
                <div className="card-front-flip text-center">
                  <img src="images/menu/rice_bowl.png" alt="Spicy Chicken Rice Bowl"
                    className="img-fluid rounded-top"/>
                    <p className="mt-4 p-3">Ready for a flavorful boost? Fuel up with this hearty bowl!</p>
                </div>
                <div className="card-back-flip">
                  <p className="text-center p-3"><strong>Spicy Chicken Rice Bowl</strong><br/>A
                    protein-packed meal featuring tender chicken, colorful veggies, and savory rice,
                    perfect for muscle-building and recovery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recipes;