const index=1;
const items= document.querySelectorAll('.slide');

class SlideShow{
    currIndex=0;

    constructor(items=[],activeClass)
    {
        this.items=items;
        this.activeClass=activeClass;
    }

    showSlide(n)
    {
        for(let item of this.items)
        {
            
            item.classList.remove(this.activeClass);
            
        }
        this.items[n].classList.add(this.activeClass);
    }

    slideNext()
    {   if(this.currIndex==this.items.length-1)
        {
            this.currIndex=0;
        }
        else{
            this.currIndex+=1;
        }
        this.showSlide(this.currIndex);
    }

    slidePrev()
    {   if(this.currIndex==0)
        {
            this.currIndex=this.items.length-1;
        }
        else{
            this.currIndex-=1;
        }
        this.showSlide(this.currIndex);
    } 
    
}

class SlideShowCircle extends SlideShow{
    circleArr=[];
    constructor(items=[],circleArr=[],activeClass,activeCircle)
    {
        super(items,activeClass);
        this.circleArr=circleArr;
        this.activeCircle=activeCircle;
    }

    showSlide(n)
    {
        for(let i=0;i<this.items.length;i++)
        {
            
            this.items[i].classList.remove(this.activeClass);
            this.circleArr[i].classList.remove(this.activeCircle);
            
        }
        this.items[n].classList.add(this.activeClass);
        this.circleArr[n].classList.add(this.activeCircle);
    }
}



// implementation of the above code

const circles= document.querySelector('.circles');
const circleArr=[];
for(let i=0;i<4;i++)
{
    const circle=document.createElement('div');
    circle.className='circle';
    circles.appendChild(circle);
    circleArr.push(circle);
}
const sl1= new SlideShowCircle(items,circleArr,'active','working');
for(let index in circleArr){
    circleArr[index].addEventListener('click',()=>{
        sl1.showSlide(index);
    });
}
sl1.showSlide(0);

const btnPrev= document.querySelector('#prev').addEventListener('click',()=>{
sl1.slidePrev();
});

const btnNext=document.querySelector('#next').addEventListener('click',()=>{
sl1.slideNext();
});

setInterval(
     ()=>{
        sl1.slideNext();
    },5000
);

document.querySelectorAll('.btn').forEach(
    (button)=>{
        button.addEventListener('mousedown',()=>{
            button.classList.add('clicked');
            
        });
        button.addEventListener('mouseout',()=>{
            button.classList.remove('clicked');
        });
        
    }   
);