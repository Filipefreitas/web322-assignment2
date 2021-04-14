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
        console.log(bodyId);
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
        //console.log(bodyId);
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

    //Function to check file extension
    if(bodyId === "catalogueAdd" || bodyId === "catalogueEdit")
    {
        console.log(bodyId);
        const srcFileUpload = document.getElementById("srcImg");
        const srcFileName = document.getElementById("srcImg-fileName");
        const backFileUpload = document.getElementById("backImg");
        const backFileName = document.getElementById("backImg-fileName");

        console.log(srcFileUpload);
        console.log(srcFileName);
        console.log(backFileUpload);
        console.log(backFileName);
        
        //function for source image
        srcFileUpload.onchange = function()
        {
            srcFileName.textContent  = this.files[0].name;
        }

        //function for background image
        backFileUpload.onchange = function()
        {
            backFileName.textContent  = this.files[0].name;
        }
    }
}

main();