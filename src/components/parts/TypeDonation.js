import React from 'react';


const TypeDonation = () => {
    return (
        <>
        <div>
            <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <h1 class="font-weight-bold mt-4">Types of Blood Donations</h1>
                        <p class="text-secondary h4"> Giving the "right" type of blood donation - based on your blood type and patient needs - helps ensure the best use of your valuable contribution. Here are some things to consider when determining how you can have the most impact.
                        </p>
                        {/* <img class="img-fluid my-4" src="assets/images/img8.png"/> */}
                        <h4>Power Red Donation</h4>
                        <p>During a Power Red donation, you give a concentrated dose of red cells, the part of your blood used every day for those needing transfusions as part of their care. This type of donation uses an automated process that separates your red blood cells from the other blood components, and then safely and comfortably returns your plasma and platelets to you.

                        With just a little extra time at your appointment, you can donate more red cells and increase your impact on patients in need. Learn more about Power Red donations.</p>
                        <p className='fw-bold'>Who it helps: </p>
                        <p>Red cells from a Power Red donation are typically given to trauma patients, newborns and emergency transfusions during birth, people with sickle cell anemia, and anyone suffering blood loss.</p>
                        <p className='fw-bold'>Time it takes:  </p><span>About 1.5 hours</span>
                        
                    </div>
                </div>
        </div>  
        </>

    );

};

export default TypeDonation;