// Connect with me custom submission
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("finalSubmitBtn").addEventListener("click", function () {
        // Get the value of the name input field
        var name = document.getElementById("name").value;

        // Update the value of the hidden input field for subject
        document.querySelector('input[name="subject"]').value = "New Workshop Inquiry from " + name;

        // Validate the form
        var form = document.querySelector('form');
        if (form.checkValidity()) {
            // Form is valid, proceed with form submission
            form.submit();
        } else {
            // Form is not valid, display validation error messages
            form.reportValidity();
        }
    });
});

let i = 1; // Initialize the counter

setInterval(function() {
    var img = "./materials/bgimgs/" + i + ".jpg";
    $(".hero-overlay").css("background-image", "url('" + img + "')").css("opacity", 1);
    setTimeout(function() {
        $(".hero").css("background-image", "url('" + img + "')");
        $(".hero-overlay").css("opacity", 0);
    }, 1000); // Match this duration with the CSS transition duration

    i++; // Increment the counter
    if (i > 5) { // Reset counter if needed
        i = 1;
    }
}, 5000); // Change background every 5000 milliseconds (5 seconds)

$("#navbarAppointment").on("mouseover click", function() {
    $(this).css("background-color", "hsl(18.73deg, 94.33%, 47%)");
    if (event.type === "click") {
        // Execute after 2 seconds (2000 milliseconds)
        setTimeout(function() {
            $("#navbarAppointment").css("background-color", ""); // Reset background color
        }, 2000);
    }
});
$("#navbarAppointment").on("mouseout", function() {
    $(this).css("background-color", "");
});
$(document).on("click", function(event) {
    // Check if the clicked element is not inside the navbar or the toggler button
    if (!$(event.target).closest('.navbar').length && !$(event.target).hasClass('navbar-toggler')) {
        // Collapse the navbar if it's currently expanded
        if ($('.navbar-collapse').hasClass('show')) {
            $('.navbar-collapse').collapse('hide');
        }
    }
});

// navbar toggler animation
function togglerAnim() {
    $(".navbar-toggler").on("click", function() {
        var isCollapsed = $(this).hasClass("collapsed");

        if (!isCollapsed) {
            $(this).html('<span style="font-weight: bold;">X</span>');
        } else {
            $(this).html('<span class="navbar-toggler-icon"></span>'); 
        }
    });
}
togglerAnim();

$(".btn.btn-danger").on("mouseover ", function(event) {
    $(this).css("background-color", "hsl(18.73deg, 94.33%, 47%)");
});

$(".btn.btn-danger").on("mouseout ", function(event) {
    $(this).css("background-color", "");
});

$(".card").on("mouseover", function() {
    $(this).css({
        transform: "scale(1.05)",
        transition: "transform 0.2s",
        boxShadow: "0 0 8px #6E07F3, 0 0 16px #6E07F3"
    });
}).on("mouseout", function() {
    $(this).css({
        transform: "scale(1)",
        boxShadow: ""
    });
});

$(document).ready(function() {
    // Function to handle the intersection of the #services section
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(".card").each(function(index) {
                    $(this).delay(index * 300).fadeIn(600); // Adjust delay and fadeIn duration as needed
                });
                observer.unobserve(entry.target); // Stop observing once triggered
            }
        });
    }

    // Initialize IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    // Observe the #services section
    observer.observe(document.getElementById('services'));
});

$(document).ready(function() {
    var texts = [
        "Specialized Expertise: Certified in KTM LC4 engines, and trained by both Bajaj and KTM, ensuring superior knowledge and skills.",
        "Multibrand Service: Extensive experience servicing brands including KTM, Bajaj, Husqvarna, Aprilia, Yamaha, Hero, TVS, Royal Enfield (RE), Suzuki, Honda, Hyosung, Ola, and Ather.",
        "Comprehensive Maintenance: From routine periodic servicing to specialized repairs and diagnostics, we provide thorough and reliable maintenance solutions.",
        "Whether you need routine servicing or complex repairs, trust [Your Business Name] to deliver exceptional service tailored to your motorcycle's needs."
    ];

    var index = 0;
    var currentText = "";
    var letterIndex = 0;
    var isDeleting = false;

    function type() {
        var text = texts[index];
        if (isDeleting) {
            currentText = text.substring(0, letterIndex - 1);
            letterIndex--;
        } else {
            currentText = text.substring(0, letterIndex + 1);
            letterIndex++;
        }

        $('#sub').text(currentText);

        var typingSpeed = 20; // Adjust typing speed (milliseconds)

        if (isDeleting) {
            typingSpeed = 20; // Slower deleting speed
        }

        // Check if word is complete
        if (!isDeleting && currentText === text) {
            isDeleting = true;
            typingSpeed = 3000; // Pause before deleting (1 second)
        } else if (isDeleting && currentText === "") {
            isDeleting = false;
            index++;
            if (index >= texts.length) {
                index = 0;
            }
            typingSpeed = 200; // Delay before typing next text
        }

        setTimeout(function() {
            type();
        }, typingSpeed);
    }

    $(document).ready(function() {
        type();
    });
});

$(document).ready(function() {
    // Smooth scroll to #contact section
    $("#navbarAppointment").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000); // Adjust scroll speed as needed
    });
});

$(document).ready(function() {
    $(".btn-danger").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000); // Adjust the duration (in milliseconds) as needed
    });
});
