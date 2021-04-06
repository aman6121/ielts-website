// navbar js starts

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
}) 
// navbar js ends

// ============================================================
// ===================================================== 

// js for video 
function init() {
let facts = document.querySelector('.facts');
let features = document.querySelector('.features');  
let features_list_grp = document.querySelector('.features ul .grp');  
let see_features = document.querySelector('.features > a');
let play_btn = document.querySelector('.play-button');
let close_btn = document.querySelector('.close-button');
let clip = document.querySelector('.clip');
let cloak = document.querySelector('.cloak');
let caption = document.querySelector('.caption');
let caption_header = document.querySelector('.caption h3');
let caption_content = document.querySelector('.caption p');

let features_expanded = 0;
const tl = new TimelineMax();

see_features.addEventListener('click',function(e) {
e.preventDefault();

let icon = this.querySelector('ion-icon');
if (features_expanded == 0) {

// change icon from - to x   
icon.setAttribute('name','close');  
features_expanded = 1;

// height can be changed
tl.fromTo(facts, 0.8, {height:"40vh"}, {height:"100vh" , ease: Expo.easeInOut });
tl.fromTo (features_list_grp, 1.5, {display:"none"},{display:"block"},1);
tl.fromTo (features_list_grp, 0.5, {opacity: "0"},{opacity:"1"}, 1);
tl.fromTo (features_list_grp, 0.3, {y: "10%"}, {y:"0%"}, 1);

} else {
    
icon.setAttribute('name','remove');
features_expanded = 0;

tl.fromTo(features_list_grp, 0.2, {opacity:"1"} , {opacity:"0"})
.fromTo(features_list_grp, 0.2 , {display:"block"} , {display:"none"},0.5);

// height can be changed
tl.fromTo(facts, 0.8, {height:"100vh"},{height:"40vh" , ease: Expo.easeInOut });
}

});   

play_btn.addEventListener('click',function (e) {
    e.preventDefault();
    tl.fromTo(features,0.5, {opacity:"1"},{opacity:"0"})
    tl.fromTo(features,0.5, {display:"block"},{display:"none"})
    tl.fromTo(facts,1, {width:'50%'},{width:'100%',ease: Expo.easeInOut})
    tl.fromTo(clip,0.2, {display:"none"},{display:"block"})
    tl.fromTo(close_btn,0.5, {opacity:"0"},{opacity:"1"})
    tl.fromTo(cloak, 1 , {width:"100%"},{width:"0%" , ease: Expo.easeInOut});
    tl.fromTo(caption, 0.5 , {display:"none"},{display:"block"});
    tl.fromTo(caption_header, 0.8 , {y:"500%"},{y:"0%" , ease: Expo.easeInOut});
    tl.fromTo(caption_content, 1 , {y:"500%"},{y:"0%" , ease: Expo.easeInOut});

});

close_btn.addEventListener('click',function (e){
e.preventDefault();
location.reload();
});

}  

init();  

