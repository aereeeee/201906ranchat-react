// const config = {
//     rootMargin: '-50px 0px -50%',
// }
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry=>{
        if(entry.isIntersecting ){
            entry.target.classList.add('active');
            console.log(entry.target.id);
        }
        else{
            entry.target.classList.remove('active');
            console.log('out');
        }
    })

});

export default observer;


