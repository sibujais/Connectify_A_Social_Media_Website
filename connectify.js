//sidebar
const menuItems=document.querySelectorAll('.menu-item');

//message
const messagenotification=document.querySelector('#messages-notifications');
const messages=document.querySelector('.messages');
const message=messages.querySelectorAll('.message');
const messageSearch=document.querySelector('#message-search');
const colorPallette=document.querySelectorAll('.choose-color span');
const Bg1=document.querySelector('.bg-1');
const Bg2=document.querySelector('.bg-2');
const Bg3=document.querySelector('.bg-3');


//THEME

const theme=document.querySelector('#theme')
const themeModal=document.querySelector('.customize-theme');
const fontSizes=document.querySelectorAll('.choose-size span')
var root=document.querySelector(':root');
// ====================== SIDEBAR==========
//remove active class for all menuitems

const changeActiveItem=()=>{
    menuItems.forEach(item=>{
        item.classList.remove('active');
    })
}
var shownotification=false;

menuItems.forEach(item =>{
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active')
        // dipslay notification popup  

        if(item.id!='notifications'){
            document.querySelector('.notifications-popup').style.display='none';
        }else{
            if(!shownotification){
                document.querySelector('.notifications-popup').style.display='block';
                shownotification=true;
            }else{
                document.querySelector('.notifications-popup').style.display='none';
                shownotification=false;
            }

            //remove notification count

            document.querySelector('#notifications .notification-count').style.display='none';
        }
    })
})

// ===============Message===========

//search chat

const searchMessage=()=>{
    const val = messageSearch.value.toLowerCase();
    
    message.forEach(chat =>{
        let name=chat.querySelector('h4').textContent.toLowerCase();
        if(name.indexOf(val)!=-1){
            chat.style.display='flex';
        }else{
            chat.style.display='none';
        }
    })
}

messageSearch.addEventListener('keyup',searchMessage);

// highlight messages box whwn click on message icon
messagenotification.addEventListener('click',()=>{
   messages.style.boxShadow='0 0 1rem var(--color-primary)';
   messagenotification.querySelector('.notification-count').style.display='none';
   setTimeout(() => {
    messages.style.boxShadow='none'; 
   }, 2000);
})

//============Theme display customization
//openmodal
const openThemeModal=()=>{
    themeModal.style.display='grid';
}

//closemodal
const closeThemeModal=(e)=>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display='none';
    }
}

themeModal.addEventListener('click',closeThemeModal);


theme.addEventListener('click',openThemeModal);


//fonts

//remove active class from spans or font -size selectors
const removeSizeSelector=()=>{
    fontSizes.forEach(size=>{
        size.classList.remove('active');
    })
}



fontSizes.forEach(size =>{
    

    size.addEventListener('click',()=>{
        removeSizeSelector(); 
        let fontSize;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1')){
            fontSize='10px';
            root.style.setProperty('--sticky-top-left','5.4rem');
            root.style.setProperty('--sticky-top-right','5.4rem');
    
        }else if(size.classList.contains('font-size-2')){
            fontSize='13px';
            root.style.setProperty('--sticky-top-left','5.4rem');
            root.style.setProperty('--sticky-top-right','-7rem');
    
        }else if(size.classList.contains('font-size-3')){
            fontSize='16px';
            root.style.setProperty('--sticky-top-left','-2rem');
            root.style.setProperty('--sticky-top-right','-17rem');
            
        }else if(size.classList.contains('font-size-4')){
            fontSize='19px';
            root.style.setProperty('--sticky-top-left','-5rem');
            root.style.setProperty('--sticky-top-right','-25rem');
    
        }else if(size.classList.contains('font-size-5')){
            fontSize='22px';
            root.style.setProperty('--sticky-top-left','-12rem');
            root.style.setProperty('--sticky-top-right','-35rem');
    
        }
        
        //change the size of the root html element
        document.querySelector('html').style.fontSize=fontSize;
    })

})

//remove active class from colors
const changeActiveColorClass=()=>{
    colorPallette.forEach(colorPicker =>{
    colorPicker.classList.remove('active')
    })
}

// change primary colors

colorPallette.forEach(color =>{
    color.addEventListener('click',()=>{
        let primaryHue;

        //remove active class
        changeActiveColorClass();
        if(color.classList.contains('color-1')){
            primaryHue=252;
        }else if(color.classList.contains('color-2')){
            primaryHue=52;
        }else if(color.classList.contains('color-3')){
            primaryHue=352;
        }else if(color.classList.contains('color-4')){
            primaryHue=152;
        }else if(color.classList.contains('color-5')){
            primaryHue=202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue',primaryHue)
    })
})

//theme background values

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// changes background color

const changeBG=()=>{
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);

}

Bg1.addEventListener('click',()=>{
    

    //add active class

    Bg2.classList.add('active');

    //remove active class from the others

    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    
    window.location.reload();
})

Bg2.addEventListener('click',()=>{
    darkColorLightness='95%';
    whiteColorLightness='20%';
    lightColorLightness='15%';

    //add active class

    Bg2.classList.add('active');

    //remove active class from the others

    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg3.addEventListener('click',()=>{
    darkColorLightness='95%';
    whiteColorLightness='10%';
    lightColorLightness='0%';

    //add active class

    Bg3.classList.add('active');

    //remove active class from the others

    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})
