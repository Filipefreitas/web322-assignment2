var currentIndex = 0;

const showModal = (modal) =>
{
    modal.classList.remove("hide");
}

const hideModal = (modal) =>
{
    modal.classList.add("hide");
}

const isEmpty = (input) =>
{
    checkEmpty = true;
    if(input)
    {
        checkEmpty = false;
    }
    return checkEmpty;
}

//MAIN
const main = ()=>
{
    const bodyId = document.body.id; 
    //console.log(bodyId);

    //Event funcions and eventlisteners for index page
    if(bodyId === "index")
    {
        const carouselImages = document.getElementsByClassName("hero-img");
        const limit = carouselImages.length;
        const rightArrow = document.getElementById("right-arrow");
        const leftArrow = document.getElementById("left-arrow");

        //console.log(carouselImages);
        //console.log(currentIndex);    
        //console.log(limit);
        //console.log(leftArrow);
        //console.log(rightArrow);

        for (let i = 0; i < limit; i++) 
        {
            let newDot = document.createElement("li");

            newDot.className = "fa fa-circle";
            newDot.setAttribute("onclick", "dotClick(this.id)");
            newDot.setAttribute("id", parseInt(i));
          
            let dotContainer = document.querySelector(".dotList");
            dotContainer.appendChild(newDot);
        }

        const dotNode = document.querySelectorAll("#hero-section > div > div > div > ul > li");
        //console.log(dotNode);

        window.addEventListener("load", event =>
        {
            carouselImages[0].classList.remove("hero-hide");
            dotNode[0].style.color = "black";
        });

        function setHero() 
        {
            for (let j = 0; j < limit; j++) 
            {
                carouselImages[j].classList.add("hero-hide");
                dotNode[j].style.color = "grey";
            }
            carouselImages[currentIndex].classList.remove("hero-hide");
            dotNode[currentIndex].style.color = "black";
        }

        rightArrow.addEventListener('click', event => 
        {
            if (currentIndex == limit - 1) 
            {
                currentIndex = 0;
            } 
            else 
            {
                currentIndex++; 
            }
            setHero();
        });

        leftArrow.addEventListener('click', event => 
        {
            if (currentIndex == 0) 
            {
                currentIndex = limit - 1;
            } 
            else 
            {
                currentIndex--; 
            }
            setHero();
        });

        dotNode.forEach((button, index) => 
        {
            button.addEventListener("click", function() 
            {
                currentIndex = index;
                setHero();
            })
        })
          
    }

    //Event funcions and eventlisteners for catalogueDetails page
    if(bodyId === "catalogueDetails")
    {
        const btnTrailer = document.getElementById('trailer');
        const modal = document.querySelector(".modal");
        const closeButton = document.querySelector(".close-modal");

        //console.log(btnTrailer);
        //console.log(modal);
        //console.log(closeButton);

        btnTrailer.addEventListener('click', event => 
        {
            event.preventDefault(); 
            showModal(modal);
        });        
        
        closeButton.addEventListener('click', event =>
        {
            hideModal(modal);
        });
    }

    //Event funcions and eventlisteners for form pages
    if(bodyId === "registration")
    {
        const firstNameField = document.querySelector('#first-name');
        const lastNameField = document.querySelector('#last-name');
        const emailField = document.querySelector('#email-address');
        const emailError = document.querySelector('#email-error');
        const passwordField = document.querySelector('#password');
        const submitButton = document.querySelector("#btn-submit");
        const formError = document.querySelector("#form-error");

        //console.log(firstNameField);
        //console.log(lastNameField);
        //console.log(emailField);
        //console.log(emailError);
        //console.log(passwordField);
        //console.log(submitButton);
        //console.log(formError);

        submitButton.addEventListener('click', event => 
        {
            
        });
    }
}

main();