// const config = {
//     rootMargin: '-50px 0px -50%',
// }
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry=>{
       let backimg;
        if(entry.isIntersecting ){
            //textbox + active class
            entry.target.classList.add('active');
            //해당 백그라운드 이미지 
            backimg = document.querySelector('img[data='+entry.target.id+']');
            backimg.classList.remove('out'); 
            backimg.classList.add('this');
        }
        else{
            entry.target.classList.remove('active');
            backimg = document.querySelector('img[data='+entry.target.id+']');
            backimg.classList.remove('this');
            backimg.classList.add('out');        
        }
    })

});

export default observer;


