const observer = new IntersectionObserver(entries => {
    entries.forEach(entry=>{
       let backimg;
        if(entry.isIntersecting ){
            backimg = document.querySelector('img[data='+entry.target.id+']');
            backimg.classList.remove('out'); 
            backimg.classList.add('this');
        }
        else{
            backimg = document.querySelector('img[data='+entry.target.id+']');
            backimg.classList.remove('this');
            backimg.classList.add('out');        
        }
    })

});

export default observer;


