class Slider{
    constructor(id,count,itemLength,identifier,duration='none'){
        this.display=document.getElementById(id);
        this.count=count;
        this.len=itemLength;
        this.time=0;

        this.slide=document.createElement("div");
        this.slide.style.width=(count*(this.len+5))+'px';
        let x=this.display.innerHTML;
        this.display.innerHTML="";
        this.display.appendChild(this.slide);
        this.slide.innerHTML=x;
        
        this.content=[];
        for(let i=0;i<this.count;i++){
            this.content[i]=identifier+(i+1);
        }
        window.setTimeout(()=>{
            let dwidth=window.getComputedStyle(this.display).getPropertyValue('width');
            if(count*(this.len)>=parseInt(dwidth)){
                this.innerDisplay=document.createElement('div');
                this.display.appendChild(this.innerDisplay);

                this.innerDisplay.style.height='100%';
                this.innerDisplay.style.width='calc(100% - 120px)';
                this.innerDisplay.style.overflow='hidden';
                this.innerDisplay.style.order=2;

                this.display.style.display='flex';
                this.innerDisplay.appendChild(this.slide);
                this.slide.style.transform=`translateX(-${this.len}px)`;

                this.buttons();
                this.prev()
                if(duration!='none'){

                }
                }
                else this.arrange();
            },50)
            if(duration!='none'){
                this.automate(duration)
            }
    }
    automate(duration){
        window.setInterval(()=>{
            this.time++;
            if(this.time>=duration*100){
                this.next();
            }
        },10)
    }
    arrange(){
        this.content.forEach(element=>{
            let item=document.getElementById(element);
            item.style.left=(this.content.indexOf(element)*this.len)+'px';
        })
    }
    next(){
        let a=this.content.shift();
        this.content.push(a);
        let item=document.getElementById(a);
        item.style.display="none";
        this.arrange();
        this.time=0;
        window.setTimeout(()=>item.style.display="inline-block",1000);
    }
    prev(){
        let a=this.content.pop();
        this.content.unshift(a);
        let item=document.getElementById(a);
        item.style.display="none";
        this.arrange();
        this.time=0;
        window.setTimeout(()=>item.style.display="inline-block",1000);
    }
    buttons(){
        this.nextBtn=document.createElement('div');
        this.nextBtn.classList.add('slideButtons');
        this.display.appendChild(this.nextBtn);
        this.nextBtn.innerHTML='<div>></div>';
        this.nextBtn.style.order=3;
        this.nextBtn.addEventListener('click',()=>this.next());

        this.prevBtn=document.createElement('div');
        this.prevBtn.classList.add('slideButtons');
        this.display.appendChild(this.prevBtn);
        this.prevBtn.innerHTML='<div><</div>';
        this.prevBtn.style.order=1;
        this.prevBtn.addEventListener('click',()=>this.prev());
    }
}
