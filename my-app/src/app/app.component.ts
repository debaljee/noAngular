import { Component } from '@angular/core';
import { trigger,
         transition,
         state,
         style,
         animate } from '@angular/animations';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
              './chat.css',
              './mainWindow.css',
              './myResponsive.css',
              './benefit.css',
              './gridStyling.css'],
  animations:[
   trigger('textIns',[
    transition('void=>*',[
     style({opacity:0}),
     animate(500,style({opacity:1}))
    ]),
    transition('*=>void',[
     style({opacity:1}),
     animate(500,style({opacity:0}))
    ])
   ]),
   trigger('butterFly',[
    state('oneB',                                      
     style({transform:'rotateY(50deg)'})),
                                
    state('twoB',
     style({transform:'rotateY(-50deg)'})),
    transition('*=>*',[
     animate(1000)
    ])
   ]),
   trigger('fadeText',[
    transition('void=>*',[
     style({opacity:0,
            height:'0%',
            'font-size':'0%'}),
     animate(1000)
    ]),
   ]),
   trigger('caro',[
    state('pic1',
     style({'background-image':'url(https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)'})),
    state('pic2',
     style({'background-image':'url(https://images.unsplash.com/photo-1529977321422-b8b54c783e3e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=749&q=80)'})),
    state('pic3',
     style({'background-image':'url(https://images.unsplash.com/photo-1592895792095-85fa785192a9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)'})),
    state('pic4',
     style({'background-image':'url(https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80)'})),
    state('pic5',
     style({'background-image':'url(https://images.unsplash.com/photo-1516676839530-135a545cce02?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80)'})),
    transition('*=>*',[
     animate(1000)
    ])
   ]),
   trigger('ca',[
    state('initial',
     style({width:'20vw',
            transform:'rotateY(0deg)',
            height:'50vh'})),
    state('inferior',
     style({width:'15vw',
            transform:'rotateY(0deg)',
            height:'37vh'})),
    state('superior',
     style({width:'35vw',
            transform:'rotateY(180deg)',
            height:'87vh'})),
     transition('*=>*',[
      animate(1500)
     ])
   ]),
   trigger('cb',[
    state('initial',
     style({width:'20vw',
            transform:'rotateY(0deg)',
            height:'50vh'})),
    state('inferior',
     style({width:'15vw',
            transform:'rotateY(0deg)',
            height:'37vh'})),
    state('superior',
     style({width:'35vw',
            transform:'rotateY(180deg)',
            height:'87vh'})),
    transition('*=>*',[
     animate(1500)
    ])
   ]),
   trigger('cc',[
    state('initial',
     style({width:'20vw',
            transform:'rotateY(0deg)',
            height:'50vh'})),
    state('inferior',               
     style({width:'15vw',       
            transform:'rotateY(0deg)',
            height:'37vh'})),
    state('superior',
     style({width:'35vw',
            transform:'rotateY(180deg)',
            height:'87vh'})),
    transition('*=>*',[
     animate(1500)
    ])
   ]),
   trigger('cd',[
    state('initial',
     style({width:'20vw',
            transform:'rotateY(0deg)',
            height:'50vh'})),
    state('inferior',
     style({width:'15vw',
            transform:'rotateY(0deg)',
            height:'37vh'})),
    state('superior',
     style({width:'35vw',
            transform:'rotateY(180deg)',
                
            height:'87vh'})),
    transition('*=>*',[
     animate(1500)
    ])
   ]),
   trigger('fluidInput',[
    state('normal',
     style({width:'50vw'})),
    state('expanded',
     style({width:'60vw'})),
                    
    state('contracted',
     style({width:'40vw'})),
    transition('*=>*',[
     animate(1000)
    ])
   ]),

   trigger('brainPosition',[
    state('tiltedRight',
     style({width:'73%',
            transform:'rotate(30deg)'})),
    state('tiltedLeft',
     style({width:'73%',
            transform:'rotate(-30deg)'})),
    state('tiltedCenter',
     style({width:'70%',
            transform:'rotate(0deg)'})),
    transition('*=>*',[
     animate(500)
    ])
   ]),
   trigger('lungsGrow',[
    state('large',
     style({width:'70%'})),
    state('small',
     style({width:'50%'})),
    transition('small=>large',[
     animate(4000)
    ]),
    transition('large=>small',[
     animate(8000)
    ])
   ]),
   trigger('listGrow',[
    state('expanded',
     style({'font-size':'140%',
            'color':'red'})),
    state('contracted',
     style({'font-size':'100%',
            'color':'black'})),
    transition('*=>*',[
     animate(1000)
    ])
   ]),
   trigger('fadeInOut',[
    transition('void=>*',[
     style({opacity:0,
            height:'0px',
            color:'transparent'}),
     animate(2000)
    ]),
    transition('*=>void',[
     style({opacity:1}),
     animate(2000,style({opacity:0,
                         color:'transparent',
                         height:'0px'}))
    ])
   ]),

   trigger('fadeUpDown',[
    transition('void=>*',[
     style({opacity:0,
            height:'0px',
            color:'transparent'}),
     animate(500)
    ]),
    transition('*=>void',[
     style({opacity:0.8}),
     animate(500,style({opacity:0,
                        color:'transparent',
                        height:'0px'}))
    ])
   ]),
   trigger('headerAnim',[
    state('one',
     style({transform:'translateX(0%)'})),
    state('two',
     style({transform:'translateX(-100%)'})),
    state('three',
     style({transform:'translateX(-200%)'})),
    state('four',
     style({transform:'translateX(-300%)'})),
    state('five',
     style({transform:'translateX(-400%)'})),
    transition('*=>*',[
     animate(1000)
    ])
   ]),
   trigger('ses',[
    state('hide',
     style({'clip-path':'circle(0% at 90% 90%)'})),
    state('peek1',
     style({'clip-path':'circle(30% at 90% 90%)'})),
    state('peek2',
     style({'clip-path':'circle(40% at 90% 90%)'})),
    state('show',
     style({'clip-path':'circle(125% at 90% 90%)'})),
    transition('*=>*',[
     animate(2000)
    ])
   ]),
   trigger('ham',[
    state('hidden',
     style({'clip-path':'circle(0% at 90% 10%)'})),
    state('visible',
     style({'clip-path':'circle(130% at 90% 10%)'})),
    transition('*=>*',[
     animate(2000)
    ])
   ])

  ]
})
export class AppComponent {
  appState:number=1;
  mySession:string='hide';
  title = 'my-app';
  myState:string='hidden';
  headerState:string='two';
  headerStateNumber:number=5;
  headerStateOrder:number=0;
  list1a:number=1;
  list1b:number=1;
  list1c:number=1;
  list2a:number=0;
  list2b:number=0;
  list2c:number=0;
  list3a:number=0;
  list3b:number=0;
  list3c:number=0;
  list4a:number=0;
  list4b:number=0;
  list4c:number=0;
  list5a:number=0;
  list5b:number=0;
  list5c:number=0;
  list1state:string='contracted';
  list2state:string='contracted';
  list3state:string='contracted';
  lungsCounter:number=0;
  inhaleSeconds:number=4;
  holdSeconds:number=7;
  exhaleSeconds:number=8;
  lungsState:string='small';
  brainState:string='tiltedCenter';
  benefitSelect:number=-1;
  growOnHover:number=1;
  leftTextState:string='normal';
  rightTextState:string='normal';
  happyThoughts=[];

  butterflyState:string='oneB';


  sadThoughts=[];
  happyThought:string;
  sadThought:string;

  firstCardState:string='initial';
  secondCardState:string='initial';
  thirdCardState:string='initial';
  fourthCardState:string='initial';
  
  caroState:string='pic1';
  caroValue:number=0;
  xNum:number=0;
  yNum:number=0;
  x1:number=50;
  y1:number=0;
  x2:number=-20;
  y2:number=15;
  x3:number=125;
  y3:number=70;
  x4:number=50;
  y4:number=90;
  xi2:number=125;
  yi2:number=70;
  xi3:number=-20;
  yi3:number=15;
  textState:number=0;


  butterDown:number=0;
  pix:string='%';
  xCo:string=this.xNum.toString();
  yCo:string=this.yNum.toString();
  toggleBut1:number=0;
  toggleBut2:number=0;
  toggleBut3:number=0;
  toggleBut4:number=0;
  count:number=0;
  oneTimer:number=0;
  twoTimer:number=0;
  myConfirm:number=0;
    constructor(){
    this.xCo=this.xCo.concat(this.pix);
    this.yCo=this.yCo.concat(this.pix);
     
     setInterval(()=>{
     if(this.butterflyState=='oneB')
      this.butterflyState='twoB';
     else
      this.butterflyState='oneB';
                            
     },1000);
     
  setInterval(()=>{
   if(this.butterDown==0)
    this.count=this.count+1;
   else
    this.count=this.count-1;
   let temp:number=(this.count/300);
   if(temp==1)
    this.butterDown=1;
   if(temp==0)
    this.butterDown=0;
   if(this.butterDown==0)
   {
    let a1=(-1)*this.x1+(3)*this.x2+(-3)*this.x3+this.x4;
    let a2=(3)*this.x1+(-6)*this.x2+(3)*this.x3;
    let a3=(-3)*this.x1+(3)*this.x2;
    let a4=this.x1;
    this.xNum=a1*(temp*temp*temp)+a2*(temp*temp)+a3*temp+a4;
    let b1=(-1)*this.y1+(3)*this.y2+(-3)*this.y3+this.y4;
    let b2=(3)*this.y1+(-6)*this.y2+(3)*this.y3;
    let b3=(-3)*this.y1+(3)*this.y2;
    let b4=this.y1;
    this.yNum=b1*(temp*temp*temp)+b2*(temp*temp)+b3*temp+b4;
   }
   else
   {
    let a1=(-1)*this.x1+(3)*this.xi2+(-3)*this.xi3+this.x4;
    let a2=(3)*this.x1+(-6)*this.xi2+(3)*this.xi3;
    let a3=(-3)*this.x1+(3)*this.xi2;
    let a4=this.x1;

    this.xNum=a1*(temp*temp*temp)+a2*(temp*temp)+a3*temp+a4;
    let b1=(-1)*this.y1+(3)*this.yi2+(-3)*this.yi3+this.y4;
    let b2=(3)*this.y1+(-6)*this.yi2+(3)*this.yi3;
    let b3=(-3)*this.y1+(3)*this.yi2;
    let b4=this.y1;
    this.yNum=b1*(temp*temp*temp)+b2*(temp*temp)+b3*temp+b4;
   }



   this.xCo=this.xNum.toString();
   this.yCo=this.yNum.toString();
   this.xCo=this.xCo.concat(this.pix);
   this.yCo=this.yCo.concat(this.pix);
  },30);
   setInterval(()=>{                 
    if(this.textState==0 &&
                              
       this.myConfirm==0)
     this.mySession='peek1';
    else if(this.textState==2 &&
            this.myConfirm==0)
     this.mySession='peek2';
    if(this.caroValue==22)
    {                    
     this.mySession='show';
     this.myConfirm=1;
    }
    this.textState=(this.textState+1)%4;
    this.caroValue=(this.caroValue+1)%25;
     if(this.caroValue>=0 &&
        this.caroValue<5)
      this.caroState='pic1'; 
                             
     else if(this.caroValue>=5 &&
             this.caroValue<10)
      this.caroState='pic2';  
     else if(this.caroValue>=10 &&
             this.caroValue<15)
      this.caroState='pic3'; 
     else if(this.caroValue>=15 &&
             this.caroValue<20)
      this.caroState='pic4';
     else if(this.caroValue>=20 &&
             this.caroValue<25)
      this.caroState='pic5';
    },1000);

   setInterval(()=>{
    if(this.headerStateOrder==0)
     this.headerStateNumber=this.headerStateNumber+0.5;
    else
     this.headerStateNumber=this.headerStateNumber-0.5;

    if(this.headerStateNumber==45)
     this.headerStateOrder=1;
    else if(this.headerStateNumber==5)
     this.headerStateOrder=0;
    if(this.headerStateNumber>=0 &&
       this.headerStateNumber<10)
     this.headerState='one';
    else if(this.headerStateNumber>=10 &&
            this.headerStateNumber<20)
     this.headerState='two';
    else if(this.headerStateNumber>=20 &&
            this.headerStateNumber<30)
     this.headerState='three';
    else if(this.headerStateNumber>=30 &&
            this.headerStateNumber<40)
     this.headerState='four';
    else if(this.headerStateNumber>=40 &&
            this.headerStateNumber<50)
     this.headerState="five";

    if(this.headerStateOrder==0 &&
       this.headerStateNumber==8.5)
     this.list1a=0;
    else if(this.headerStateOrder==0 && 
            this.headerStateNumber==9)
     this.list1b=0;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==9.5)
     this.list1c=0;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==11)
     this.list2c=1;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==11.5)
     this.list2b=1;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==12)
     this.list2a=1;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==18.5)
     this.list2a=0;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==19)
     this.list2b=0;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==19.5)
     this.list2c=0;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==21)
     this.list3c=1;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==21.5)
     this.list3b=1;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==22)
     this.list3a=1;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==28.5)
                                     
     this.list3a=0;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==29)
     this.list3b=0;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==29.5)
     this.list3c=0;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==31)
     this.list4c=1;
                
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==31.5)
     this.list4b=1;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==32)
     this.list4a=1;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==38.5)
     this.list4a=0;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==39)
     this.list4b=0;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==39.5)
     this.list4c=0;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==41)
     this.list5c=1;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==41.5)
     this.list5b=1;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==42)
     this.list5a=1;
    else{
     if(this.headerStateNumber==41)
      this.list5a=0;
     else if(this.headerStateNumber==40.5)
      this.list5b=0;
     else if(this.headerStateNumber==40)
      this.list5c=0;
     else if(this.headerStateNumber==38.5)
      this.list4c=1;
     else if(this.headerStateNumber==38)
      this.list4b=1;
     else if(this.headerStateNumber==37.5)
      this.list4a=1;
     else if(this.headerStateNumber==31)
      this.list4a=0;
     else if(this.headerStateNumber==30.5)
      this.list4b=0;
     else if(this.headerStateNumber==30)
      this.list4c=0;
     else if(this.headerStateNumber==28.5)
      this.list3c=1;
     else if(this.headerStateNumber==28)
      this.list3b=1;
     else if(this.headerStateNumber==27.5)
      this.list3a=1;
     else if(this.headerStateNumber==21)
      this.list3a=0;
     else if(this.headerStateNumber==20.5)
      this.list3b=0;
     else if(this.headerStateNumber==20)
      this.list3c=0;
     else if(this.headerStateNumber==18.5)
      this.list2c=1;
     else if(this.headerStateNumber==18)
      this.list2b=1;
     else if(this.headerStateNumber==17.5)
      this.list2a=1;
     else if(this.headerStateNumber==11)
      this.list2a=0;
     else if(this.headerStateNumber==10.5)
      this.list2b=0;
     else if(this.headerStateNumber==10)
      this.list2c=0;
     else if(this.headerStateNumber==8.5)
      this.list1c=1;
     else if(this.headerStateNumber==8)
      this.list1b=1;
     else if(this.headerStateNumber==7.5)
      this.list1a=1;
    }
   },500);
   setInterval(()=>{
    this.lungsCounter=(this.lungsCounter+1)%19;
    this.list1state='contracted';
    this.list2state='contracted';
    this.list3state='contracted';
     if(this.lungsCounter>=0 &&
        this.lungsCounter<=3){
      this.lungsState='large';
      this.exhaleSeconds=8;
      if(this.lungsCounter==0)
       this.inhaleSeconds=5;
      this.inhaleSeconds=(this.inhaleSeconds-1);
      this.list1state='expanded';
     }
     else if(this.lungsCounter>=4 &&
             this.lungsCounter<=10){
      this.inhaleSeconds=4;
      if(this.lungsCounter==4)
       this.holdSeconds=8;
      this.holdSeconds=(this.holdSeconds-1);
      this.list2state='expanded';
     }
     else{
      this.lungsState='small';
      this.holdSeconds=7;
      if(this.lungsCounter==11)
       this.exhaleSeconds=9;
      this.exhaleSeconds=this.exhaleSeconds-1;
      this.list3state='expanded';
     }
   },1000);  
  }

  show(){
   this.myState='visible';
  }
  hide(){
   this.myState='hidden';
  }
  left(){
   this.brainState='tiltedLeft';
  }
  right(){
   this.brainState='tiltedRight';
  }
  center(){
   this.brainState='tiltedCenter';
  }
  leftTextExpand(){
   this.leftTextState='expanded';
   this.rightTextState='contracted';
  }
  rightTextExpand(){
   this.leftTextState='contracted';
   this.rightTextState='expanded';
  }
  randomHappyResponse(a,b):string{
   let abs:number=Math.floor(Math.random()*(b-a+1))+a;
   let response:string;
   if(abs==0)
    response='That sounds really heartfelt and nice, maybe you should remind yourself how this made you feel more often.';
   if(abs==1)
    response='I hope you are taking a step back, pausing for a second just to consume all this joy and excitement';
   return(response);
  }
  randomSadResponse(a,b):string{
   let abs:number=Math.floor(Math.random()*(b-a+1))+a;
   let response:string;
   if(abs==0)
    response='There seems to be so much unnecessary burden on your mind, there will alyways be better circumstances.';
   if(abs==1)
    response='Perhaps you should make an attempt to let go of all these intense emotions. There is peace in closure.';
   return(response);
  }
  appendHappy(){
   let myResponse:string=this.randomHappyResponse(0,1);
   this.happyThoughts.push({'resp':myResponse,
                            'thought':this.happyThought});
  }
  appendSad(){
   let myResponse:string=this.randomSadResponse(0,1);
   this.sadThoughts.push({'resp':myResponse,
                          'thought':this.sadThought});
  }
  firstCardExpand(){
   this.firstCardState='superior';
   this.secondCardState='inferior';
   this.thirdCardState='inferior';
   this.fourthCardState='inferior';
    this.toggleBut1=0;
    this.toggleBut2=0;
    this.toggleBut3=0;
    this.toggleBut4=0;
   setTimeout(()=>{
    this.toggleBut1=1;
   },50);
  }
  secondCardExpand(){
   this.firstCardState='inferior';
   this.secondCardState='superior';
   this.thirdCardState='inferior';
   this.fourthCardState='inferior';
    this.toggleBut1=0;
    this.toggleBut2=0;
    this.toggleBut3=0;
    this.toggleBut4=0;
   setTimeout(()=>{
    this.toggleBut2=1;
   },50);
  }
  thirdCardExpand(){
   this.firstCardState='inferior';
   this.secondCardState='inferior';
   this.thirdCardState='superior';
   this.fourthCardState='inferior';
    this.toggleBut1=0;
    this.toggleBut2=0;
    this.toggleBut3=0;
    this.toggleBut4=0;
   setTimeout(()=>{
    this.toggleBut3=1;
   },50);
  }
  fourthCardExpand(){
   this.firstCardState='inferior';
   this.secondCardState='inferior';
   this.thirdCardState='inferior';
   this.fourthCardState='superior';
    this.toggleBut1=0;
    this.toggleBut2=0;
    this.toggleBut3=0;
    this.toggleBut4=0;
   setTimeout(()=>{
    this.toggleBut4=1;
   },50);
  }
  normalCardState(){
   this.firstCardState='initial';
   this.secondCardState='initial';
   this.thirdCardState='initial';
   this.fourthCardState='initial';
    this.toggleBut1=0;
    this.toggleBut2=0;
    this.toggleBut3=0;
    this.toggleBut4=0;

  }
  toggleState1(){
   this.appState=1;
   this.myState='hidden';
  }
  toggleState2(){
   this.myState='hidden';
   this.appState=2;
  }
  toggleState3(){
   this.myState='hidden';
   this.appState=3;
   this.myConfirm=0;
   this.mySession='hide';
   this.textState=0;
   this.caroValue=-6;
   this.caroState='pic1';
  }
  timer1(){
   this.oneTimer=5;
   this.twoTimer=3;
  }
  timer2(){
   this.oneTimer=20;
   this.twoTimer=10;
  }
  timer3(){
   this.oneTimer=50;
   this.twoTimer=10;
  }
}
