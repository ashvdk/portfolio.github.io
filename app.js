document.getElementById("scroll_contact").addEventListener("click",function(){
    document.getElementById("contact").scrollIntoView({
            behavior: 'smooth'
    });
})
document.getElementById("scroll_experience").addEventListener("click",function(){
    document.getElementById("experience").scrollIntoView({
            behavior: 'smooth'
    });
})
document.getElementById("scroll_projects").addEventListener("click",function(){
    document.getElementById("projects").scrollIntoView({
            behavior: 'smooth'
    });
})
document.getElementById("moveup").addEventListener("click",function(){
    document.body.scrollIntoView({
            behavior: 'smooth'
    });
    //alert("dj kshd fv");
})