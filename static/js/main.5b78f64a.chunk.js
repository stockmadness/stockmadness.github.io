(this["webpackJsonpstonk-madness"]=this["webpackJsonpstonk-madness"]||[]).push([[0],{46:function(s,i,n){},47:function(s,i,n){},89:function(s,i,n){"use strict";n.r(i);var t,r=n(1),e=n.n(r),o=n(34),p=n.n(o),a=(n(46),n(21)),h=n(3),c=n(4),d=n(8),u=n(7),m=(n(47),{a:{0:[{teamA:"WBA",teamB:"CVS",winner:"CVS"},{teamA:"WMT",teamB:"COST",winner:"COST"},{teamA:"UNH",teamB:"HUM",winner:"UNH"},{teamA:"AMGN",teamB:"DXCM",winner:"DXCM"},{teamA:"JNJ",teamB:"BSX",winner:"BSX"},{teamA:"HD",teamB:"LOW",winner:"HD"},{teamA:"MRK",teamB:"PFE",winner:"PFE"},{teamA:"JPM",teamB:"BAC",winner:"BAC"}],1:[{teamA:"CVS",teamB:"COST",winner:!1},{teamA:"UNH",teamB:"DXCM",winner:!1},{teamA:"BSX",teamB:"HD",winner:!1},{teamA:"PFE",teamB:"BAC",winner:!1}],2:[{teamA:!1,teamB:!1,winner:!1},{teamA:!1,teamB:!1,winner:!1}],3:[{teamA:!1,teamB:!1,winner:!1}],4:[{teamA:!1,teamB:!1,winner:!1}]},b:{0:[{teamA:"CAT",teamB:"DE",winner:"DE"},{teamA:"FCX",teamB:"MLM",winner:"FCX"},{teamA:"CRM",teamB:"ADSK",winner:"CRM"},{teamA:"HON",teamB:"LMT",winner:"LMT"},{teamA:"PG",teamB:"CLX",winner:"PG"},{teamA:"TRV",teamB:"ALL",winner:"ALL"},{teamA:"NKE",teamB:"POOL",winner:"POOL"},{teamA:"BA",teamB:"GE",winner:"GE"}],1:[{teamA:"DE",teamB:"FCX",winner:!1},{teamA:"CRM",teamB:"LMT",winner:!1},{teamA:"PG",teamB:"ALL",winner:!1},{teamA:"POOL",teamB:"GE",winner:!1}],2:[{teamA:!1,teamB:!1,winner:!1},{teamA:!1,teamB:!1,winner:!1}],3:[{teamA:!1,teamB:!1,winner:!1}],4:[{teamA:!1,teamB:!1,winner:!1}]},c:{0:[{teamA:"INTC",teamB:"AMD",winner:"AMD"},{teamA:"AAPL",teamB:"QCOM",winner:"AAPL"},{teamA:"IBM",teamB:"AMAT",winner:"IBM"},{teamA:"MSFT",teamB:"ADBE",winner:"MSFT"},{teamA:"DIS",teamB:"VIAC",winner:"DIS"},{teamA:"CSCO",teamB:"ASML",winner:"ASML"},{teamA:"VZ",teamB:"TMUS",winner:"TMUS"},{teamA:"GS",teamB:"MS",winner:"GS"}],1:[{teamA:"AMD",teamB:"AAPL",winner:!1},{teamA:"IBM",teamB:"MSFT",winner:!1},{teamA:"DIS",teamB:"ASML",winner:!1},{teamA:"TMUS",teamB:"GS",winner:!1}],2:[{teamA:!1,teamB:!1,winner:!1},{teamA:!1,teamB:!1,winner:!1}],3:[{teamA:!1,teamB:!1,winner:!1}],4:[{teamA:!1,teamB:!1,winner:!1}]},d:{0:[{teamA:"CVX",teamB:"HAL",winner:"CVX"},{teamA:"NEE",teamB:"ETR",winner:"ETR"},{teamA:"MCD",teamB:"SBUX",winner:"MCD"},{teamA:"MMM",teamB:"PPG",winner:"PPG"},{teamA:"V",teamB:"MA",winner:"V"},{teamA:"DOW",teamB:"DD",winner:"DD"},{teamA:"KO",teamB:"PEP",winner:"PEP"},{teamA:"AXP",teamB:"PYPL",winner:"AXP"}],1:[{teamA:"CVX",teamB:"ETR",winner:!1},{teamA:"MCD",teamB:"PPG",winner:!1},{teamA:"V",teamB:"DD",winner:!1},{teamA:"PEP",teamB:"AXP",winner:!1}],2:[{teamA:!1,teamB:!1,winner:!1},{teamA:!1,teamB:!1,winner:!1}],3:[{teamA:!1,teamB:!1,winner:!1}],4:[{teamA:!1,teamB:!1,winner:!1}]},m:{0:[{teamA:!1,teamB:!1,winner:!1}]},n:{0:[{teamA:!1,teamB:!1,winner:!1}]},o:{0:[{teamA:!1,teamB:!1,winner:!1}]},y:{0:[{teamA:"SPY",teamB:"QQQ",winner:!1}]},z:{0:[{teamA:"STONKS",teamB:"DIA",winner:!1}]}}),l=[{number:0,name:"First Round",start:"2021-04-01",end:"2021-04-30",stakes:10,incremental:640,show:!0},{number:1,name:"Second Round",start:"2021-05-03",end:"2021-05-27",stakes:80,incremental:640,show:!0},{number:2,name:"Sweet 16",start:"2021-06-01",end:"2021-06-30",stakes:160,incremental:1280,show:!1},{number:3,name:"Elite 8",start:"2021-07-01",end:"2021-07-30",stakes:640,incremental:2560,show:!1},{number:4,name:"Final 4",start:"2021-08-02",end:"2021-08-31",stakes:2400,incremental:5120,show:!1},{number:5,name:"Championship",start:"2021-09-01",end:"2021-09-30",stakes:5e3,incremental:0,show:!1}],k=n(35),b=n(37),W=n(36),j=n.n(W),O=n(12),x=n.n(O),w=n(0),P=b.a.p(t||(t=Object(k.a)(["\n  font-size: 17px;\n  font-weight: 500;\n  letter-spacing: 0.01em;\n  display: inline-block;\n  padding: 0 8px;\n"]))),A=function(s){Object(d.a)(n,s);var i=Object(u.a)(n);function n(){var s;Object(h.a)(this,n);for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return(s=i.call.apply(i,[this].concat(r))).handleNumericClick=function(s){s.stopPropagation()},s.handlePickWinner=function(i){var n=s.props,t=n.team,r=n.round,e=n.division,o=n.matchId;n.winner;if(r>1)return!1;1===r?s.props.unPickWinner({team:t,round:r,division:e,matchId:o,winner:!1}):0===r&&s.props.pickWinner({team:t,round:r,division:e,matchId:o,winner:s.props.team.slug})},s}return Object(c.a)(n,[{key:"render",value:function(){var s="is-light";this.props.team&&"darkGreen"===this.props.status&&(s="is-success"),this.props.team&&"lightGreen"===this.props.status&&(s="is-success is-light"),this.props.team&&"lightRed"===this.props.status&&(s="is-danger is-light"),this.props.team&&"darkRed"===this.props.status&&(s="is-danger");var i=this.props.team&&this.props.winner?this.props.winner===this.props.team.name?"has-background-link":"has-background-warning":"",n=this.props.team?"".concat(this.props.team.name):"Undecided",t=this.props.team?Object(w.jsx)(j.a,{className:s,children:Math.round(1e4*this.props.team.currentRoundScore)/100}):"";return Object(w.jsxs)(x.a,{className:i,onClick:this.handlePickWinner,children:[Object(w.jsx)(P,{children:n}),t]})}}]),n}(e.a.Component),v=function(s){Object(d.a)(n,s);var i=Object(u.a)(n);function n(){return Object(h.a)(this,n),i.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var s=this,i=this.props.teams[this.props.bracket[this.props.division][this.props.round][this.props.matchId].teamA],n=this.props.teams[this.props.bracket[this.props.division][this.props.round][this.props.matchId].teamB],t=this.props.bracket[this.props.division][this.props.round][this.props.matchId].winner,r="tied",e="tied";i&&n&&i.currentRoundScore>n.currentRoundScore&&(r=i.currentRoundScore>=0?"darkGreen":"lightRed",e=n.currentRoundScore>=0?"lightGreen":"darkRed"),i&&n&&i.currentRoundScore<n.currentRoundScore&&(r=i.currentRoundScore>=0?"lightGreen":"darkRed",e=n.currentRoundScore>=0?"darkGreen":"lightRed");var o=null;if(t)o=t;else if(i&&n){var p=i.scores.find((function(i){return i.number===s.props.round})),a=n.scores.find((function(i){return i.number===s.props.round}));p&&a&&(p.score>a.score?o=i.name:a.score>p.score&&(o=n.name))}return Object(w.jsxs)(x.a,{className:"has-background-light",children:[Object(w.jsx)(A,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,team:i,status:r,round:this.props.round,division:this.props.division,matchId:this.props.matchId,winner:o,handleSeedChange:this.props.handleSeedChange}),Object(w.jsx)(A,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,team:n,status:e,round:this.props.round,division:this.props.division,matchId:this.props.matchId,winner:o,handleSeedChange:this.props.handleSeedChange})]})}}]),n}(e.a.Component),C=n(2),R=n.n(C),y=n(9),I=n.n(y),B=n(11),S=n.n(B),f=function(s){Object(d.a)(n,s);var i=Object(u.a)(n);function n(){return Object(h.a)(this,n),i.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(w.jsxs)("div",{children:[Object(w.jsxs)(R.a,{children:[Object(w.jsx)(R.a.Column,{size:this.props.compsWidth,children:Object(w.jsx)(v,{round:0,division:"y",matchId:0,teams:this.props.teams,bracket:this.props.bracket})}),Object(w.jsxs)(R.a.Column,{size:this.props.titleWidth,children:[Object(w.jsx)(I.a,{className:"title is-1",children:"Stonk Madness"}),Object(w.jsxs)(I.a,{className:"subtitle",children:["Score as of ",this.props.scoreDate]})]}),Object(w.jsx)(R.a.Column,{size:this.props.compsWidth,children:Object(w.jsx)(v,{round:0,division:"z",matchId:0,teams:this.props.teams,bracket:this.props.bracket})})]}),Object(w.jsxs)(R.a,{children:[this.props.rounds[0].show&&Object(w.jsx)(R.a.Column,{size:this.props.earlyRoundWidth,children:Object(w.jsx)(I.a,{className:"title is-4",children:this.props.rounds[0].name})}),this.props.rounds[1].show&&Object(w.jsx)(R.a.Column,{size:this.props.earlyRoundWidth,children:Object(w.jsx)(I.a,{className:"title is-4",children:this.props.rounds[1].name})}),this.props.rounds[2].show&&Object(w.jsx)(R.a.Column,{size:this.props.earlyRoundWidth,children:Object(w.jsx)(I.a,{className:"title is-4",children:this.props.rounds[2].name})}),this.props.rounds[3].show&&Object(w.jsx)(R.a.Column,{size:this.props.earlyRoundWidth,children:Object(w.jsx)(I.a,{className:"title is-4",children:this.props.rounds[3].name})}),this.props.rounds[4].show&&Object(w.jsx)(R.a.Column,{size:this.props.earlyRoundWidth,children:Object(w.jsx)(I.a,{className:"title is-4",children:this.props.rounds[4].name})}),this.props.rounds[5].show&&Object(w.jsx)(R.a.Column,{size:this.props.championshipWidth,children:Object(w.jsx)(I.a,{className:"title is-4",children:this.props.rounds[5].name})}),this.props.rounds[4].show&&Object(w.jsx)(R.a.Column,{size:this.props.earlyRoundWidth,children:Object(w.jsx)(I.a,{className:"title is-4",children:this.props.rounds[4].name})}),this.props.rounds[3].show&&Object(w.jsx)(R.a.Column,{size:this.props.earlyRoundWidth,children:Object(w.jsx)(I.a,{className:"title is-4",children:this.props.rounds[3].name})}),this.props.rounds[2].show&&Object(w.jsx)(R.a.Column,{size:this.props.earlyRoundWidth,children:Object(w.jsx)(I.a,{className:"title is-4",children:this.props.rounds[2].name})}),this.props.rounds[1].show&&Object(w.jsx)(R.a.Column,{size:this.props.earlyRoundWidth,children:Object(w.jsx)(I.a,{className:"title is-4",children:this.props.rounds[1].name})}),this.props.rounds[0].show&&Object(w.jsx)(R.a.Column,{size:this.props.earlyRoundWidth,children:Object(w.jsx)(I.a,{className:"title is-4",children:this.props.rounds[0].name})})]}),Object(w.jsxs)(R.a,{children:[this.props.rounds[0].show&&Object(w.jsxs)(R.a.Column,{size:this.props.earlyRoundWidth,children:[this.props.rounds[0].start," to ",this.props.rounds[0].end]}),this.props.rounds[1].show&&Object(w.jsxs)(R.a.Column,{size:this.props.earlyRoundWidth,children:[this.props.rounds[1].start," to ",this.props.rounds[1].end]}),this.props.rounds[2].show&&Object(w.jsxs)(R.a.Column,{size:this.props.earlyRoundWidth,children:[this.props.rounds[2].start," to ",this.props.rounds[2].end]}),this.props.rounds[3].show&&Object(w.jsxs)(R.a.Column,{size:this.props.earlyRoundWidth,children:[this.props.rounds[3].start," to ",this.props.rounds[3].end]}),this.props.rounds[4].show&&Object(w.jsxs)(R.a.Column,{size:this.props.earlyRoundWidth,children:[this.props.rounds[4].start," to ",this.props.rounds[4].end]}),this.props.rounds[5].show&&Object(w.jsxs)(R.a.Column,{size:this.props.championshipWidth,children:[this.props.rounds[5].start," to ",this.props.rounds[5].end]}),this.props.rounds[4].show&&Object(w.jsxs)(R.a.Column,{size:this.props.earlyRoundWidth,children:[this.props.rounds[4].start," to ",this.props.rounds[4].end]}),this.props.rounds[3].show&&Object(w.jsxs)(R.a.Column,{size:this.props.earlyRoundWidth,children:[this.props.rounds[3].start," to ",this.props.rounds[3].end]}),this.props.rounds[2].show&&Object(w.jsxs)(R.a.Column,{size:this.props.earlyRoundWidth,children:[this.props.rounds[2].start," to ",this.props.rounds[2].end]}),this.props.rounds[1].show&&Object(w.jsxs)(R.a.Column,{size:this.props.earlyRoundWidth,children:[this.props.rounds[1].start," to ",this.props.rounds[1].end]}),this.props.rounds[0].show&&Object(w.jsxs)(R.a.Column,{size:this.props.earlyRoundWidth,children:[this.props.rounds[0].start," to ",this.props.rounds[0].end]})]}),Object(w.jsxs)(R.a,{children:[this.props.rounds[0].show&&Object(w.jsx)(R.a.Column,{size:this.props.earlyRoundWidth,children:Object(w.jsx)(S.a,{className:"is-info",value:21,max:22,children:"90%"})}),this.props.rounds[1].show&&Object(w.jsx)(R.a.Column,{size:this.props.earlyRoundWidth,children:Object(w.jsx)(S.a,{className:"is-info",value:0,max:100,children:"45%"})}),this.props.rounds[2].show&&Object(w.jsx)(R.a.Column,{size:this.props.earlyRoundWidth,children:Object(w.jsx)(S.a,{className:"is-info",value:0,max:100,children:"45%"})}),this.props.rounds[3].show&&Object(w.jsx)(R.a.Column,{size:this.props.earlyRoundWidth,children:Object(w.jsx)(S.a,{className:"is-info",value:0,max:100,children:"45%"})}),this.props.rounds[4].show&&Object(w.jsx)(R.a.Column,{size:this.props.earlyRoundWidth,children:Object(w.jsx)(S.a,{className:"is-info",value:0,max:100,children:"45%"})}),this.props.rounds[5].show&&Object(w.jsx)(R.a.Column,{size:this.props.championshipWidth,children:Object(w.jsx)(S.a,{className:"is-info",value:0,max:100,children:"45%"})}),this.props.rounds[4].show&&Object(w.jsx)(R.a.Column,{size:this.props.earlyRoundWidth,children:Object(w.jsx)(S.a,{className:"is-info",value:0,max:100,children:"45%"})}),this.props.rounds[3].show&&Object(w.jsx)(R.a.Column,{size:this.props.earlyRoundWidth,children:Object(w.jsx)(S.a,{className:"is-info",value:0,max:100,children:"45%"})}),this.props.rounds[2].show&&Object(w.jsx)(R.a.Column,{size:this.props.earlyRoundWidth,children:Object(w.jsx)(S.a,{className:"is-info",value:0,max:100,children:"45%"})}),this.props.rounds[1].show&&Object(w.jsx)(R.a.Column,{size:this.props.earlyRoundWidth,children:Object(w.jsx)(S.a,{className:"is-info",value:0,max:100,children:"45%"})}),this.props.rounds[0].show&&Object(w.jsx)(R.a.Column,{size:this.props.earlyRoundWidth,children:Object(w.jsx)(S.a,{className:"is-info",value:21,max:22,children:"90%"})})]})]})}}]),n}(e.a.Component),M=(n(69),e.a.Component,function(s){Object(d.a)(n,s);var i=Object(u.a)(n);function n(){return Object(h.a)(this,n),i.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(w.jsx)("div",{children:Object(w.jsxs)(R.a,{children:[this.props.rounds[0].show&&Object(w.jsx)(R.a.Column,{size:this.props.earlyRoundWidth,children:0===this.props.round&&Object(w.jsx)(v,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:this.props.round,division:this.props.divisions[0],matchId:this.props.matchId,teams:this.props.teams,bracket:this.props.bracket},this.props.matchId)}),this.props.rounds[1].show&&Object(w.jsxs)(R.a.Column,{size:this.props.earlyRoundWidth,children:[0===this.props.round&&false,1===this.props.round&&Object(w.jsx)(v,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:this.props.round,division:this.props.divisions[0],matchId:this.props.matchId,teams:this.props.teams,bracket:this.props.bracket},this.props.matchId)]}),this.props.rounds[2].show&&Object(w.jsx)(R.a.Column,{size:this.props.earlyRoundWidth,children:2===this.props.round&&Object(w.jsx)(v,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:this.props.round,division:this.props.divisions[0],matchId:this.props.matchId,teams:this.props.teams,bracket:this.props.bracket},this.props.matchId)}),this.props.rounds[3].show&&Object(w.jsx)(R.a.Column,{size:this.props.earlyRoundWidth,children:3===this.props.round&&Object(w.jsx)(v,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:this.props.round,division:this.props.divisions[0],matchId:this.props.matchId,teams:this.props.teams,bracket:this.props.bracket},this.props.matchId)}),this.props.rounds[4].show&&Object(w.jsx)(R.a.Column,{size:this.props.earlyRoundWidth,children:4===this.props.round&&Object(w.jsx)(v,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:this.props.round,division:this.props.divisions[0],matchId:this.props.matchId,teams:this.props.teams,bracket:this.props.bracket},this.props.matchId)}),this.props.rounds[5].show&&Object(w.jsx)(R.a.Column,{size:this.props.championshipWidth,children:5===this.props.round&&Object(w.jsx)(v,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:this.props.round,division:this.props.divisions[2],matchId:this.props.matchId,teams:this.props.teams,bracket:this.props.bracket},this.props.matchId)}),this.props.rounds[4].show&&Object(w.jsx)(R.a.Column,{size:this.props.earlyRoundWidth,children:4===this.props.round&&Object(w.jsx)(v,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:this.props.round,division:this.props.divisions[1],matchId:this.props.matchId,teams:this.props.teams,bracket:this.props.bracket},this.props.matchId)}),this.props.rounds[3].show&&Object(w.jsx)(R.a.Column,{size:this.props.earlyRoundWidth,children:3===this.props.round&&Object(w.jsx)(v,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:this.props.round,division:this.props.divisions[1],matchId:this.props.matchId,teams:this.props.teams,bracket:this.props.bracket},this.props.matchId)}),this.props.rounds[2].show&&Object(w.jsx)(R.a.Column,{size:this.props.earlyRoundWidth,children:2===this.props.round&&Object(w.jsx)(v,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:this.props.round,division:this.props.divisions[1],matchId:this.props.matchId,teams:this.props.teams,bracket:this.props.bracket},this.props.matchId)}),this.props.rounds[1].show&&Object(w.jsxs)(R.a.Column,{size:this.props.earlyRoundWidth,children:[0===this.props.round&&false,1===this.props.round&&Object(w.jsx)(v,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:this.props.round,division:this.props.divisions[1],matchId:this.props.matchId,teams:this.props.teams,bracket:this.props.bracket},this.props.matchId)]}),this.props.rounds[0].show&&Object(w.jsx)(R.a.Column,{size:this.props.earlyRoundWidth,children:0===this.props.round&&Object(w.jsx)(v,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,division:this.props.divisions[1],matchId:this.props.matchId,teams:this.props.teams,bracket:this.props.bracket},this.props.matchId)})]})})}}]),n}(e.a.Component)),g=function(s){Object(d.a)(n,s);var i=Object(u.a)(n);function n(){return Object(h.a)(this,n),i.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var s=7,i=this.props.rounds.filter((function(s){return!0===s.show&&5!==s.number})).length,n=this.props.rounds.find((function(s){return 5===s.number})).show,t=1,r=0;switch(console.log(i),n||(s=8),i){case 1:n?(t=5,r=1):t=6;break;case 2:n?(t=2,r=3):t=3;break;case 3:n?(t=1,r=5):t=2;break;case 4:n?(t=1,r=3):(t=1,s=4);break;case 5:n?(t=1,r=3):(t=1,s=6);break;default:t=1,r=1}return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(f,{rounds:this.props.rounds,scoreDate:this.props.teams.CAT.currentScoreDate,teams:this.props.teams,bracket:this.props.bracket,compsWidth:2,titleWidth:s,earlyRoundWidth:t,championshipWidth:r}),this.props.rounds[0].show&&Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["a","c"],matchId:0,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),this.props.rounds[1].show&&Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:1,divisions:["a","c"],matchId:0,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["a","c"],matchId:1,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:2,divisions:["a","c"],matchId:0,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["a","c"],matchId:2,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:1,divisions:["a","c"],matchId:1,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["a","c"],matchId:3,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:3,divisions:["a","c"],matchId:0,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["a","c"],matchId:4,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:1,divisions:["a","c"],matchId:2,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["a","c"],matchId:5,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:2,divisions:["a","c"],matchId:1,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["a","c"],matchId:6,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:1,divisions:["a","c"],matchId:3,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["a","c"],matchId:7,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:4,divisions:["a","c","o"],matchId:0,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["b","d"],matchId:0,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:1,divisions:["b","d"],matchId:0,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["b","d"],matchId:1,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:2,divisions:["b","d"],matchId:0,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["b","d"],matchId:2,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:1,divisions:["b","d"],matchId:1,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["b","d"],matchId:3,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:3,divisions:["b","d"],matchId:0,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["b","d"],matchId:4,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:1,divisions:["b","d"],matchId:2,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["b","d"],matchId:5,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:2,divisions:["b","d"],matchId:1,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["b","d"],matchId:6,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:1,divisions:["b","d"],matchId:3,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r}),Object(w.jsx)(M,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["b","d"],matchId:7,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:t,championshipWidth:r})]})}}]),n}(e.a.Component),z=n(15),N=n.n(z);new(n(41).a)("G-ECS66VT57V").initialize().then((function(s){s.pageview("path"),s.gtag("event","pageview","path")}),(function(s){console.error(s)}));var D=function(s){Object(d.a)(n,s);var i=Object(u.a)(n);function n(s){var t;return Object(h.a)(this,n),(t=i.call(this,s)).calculateCurrentScore=function(s,i){var n=t.state.rounds,r=0,e=0;for(var o in i){var p=i[o],a=s[p.symbol],h=p.last,c=p.last_time,d=null,u=function(i){var t=a.prices.find((function(s){return s.date===n[i].start})),o=a.prices.find((function(s){return s.date===n[i].end}));if(void 0!==t&&void 0===o&&(d=h/t.open-1,s[p.symbol].currentRoundScore=d,s[p.symbol].latestPrice=h,s[p.symbol].currentScoreDate=c,"CAT|BA|TRV|HON|CRM|PG|NKE|FCX|MLM|POOL|CLX|ADSK|LMT|ALL|GE|DE|WBA|JPM|HD|AMGN|UNH|JNJ|MRK|WMT|COST|PFE|BSX|HUM|DXCM|LOW|BAC|CVS|INTC|GS|CSCO|MSFT|IBM|DIS|VZ|AAPL|QCOM|TMUS|VIAC|AMAT|ADBE|ASML|MS|AMD|CVX|AXP|DOW|MMM|MCD|V|KO|NEE|ETR|PEP|MA|SBUX|PPG|DD|PYPL|HAL".split("|").includes(p.symbol))){var u=n[i].stakes;r+=u,e+=u+u*d}if(void 0===t&&void 0===o)return"break"};for(var m in n){if("break"===u(m))break}}var l=e/r-1;return s.STONKS.currentRoundScore=l,s},t.pickWinner=function(s){s.team;var i=s.round,n=s.division,r=s.matchId,e=s.winner,o=Object(a.a)({},t.state.bracket),p=parseInt(i)+1,h=Math.floor(r/2),c=r%2?"teamB":"teamA";console.log("d",n),console.log(i),console.log(r),console.log(e),o[n][i][r].winner=e,o[n][p][h][c]=e,console.log("hey",e),t.setState({bracket:o})},t.unPickWinner=function(s){s.team;var i=s.round,n=s.division,r=s.matchId,e=s.winner,o=Object(a.a)({},t.state.bracket),p=parseInt(i)+1,h=Math.floor(r/2),c=r%2?"teamB":"teamA";console.log("d",n),console.log(i),console.log(r),console.log(e),o[n][i][r].winner=!1,o[n][p][2*h][c]=!1,o[n][i-1][2*r].winner=!1,t.setState({bracket:o})},t.state={bracket:m,hasTeams:!1,hasQuotes:!1,rounds:l,teams:[],currentQuotes:[]},t.coinFlips=[],t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var s=this;N.a.all([N.a.get("./data/teams.json"),N.a.get("./data/intradayQuotes.json")]).then(N.a.spread((function(i,n){var t=s.calculateCurrentScore(i.data.teams,n.data.FormattedQuoteResult.FormattedQuote);s.setState({teams:t,hasTeams:!0,currentQuotes:n.data.FormattedQuoteResult.FormattedQuote,hasQuotes:!0})})))}},{key:"render",value:function(){return Object(w.jsx)("div",{className:"App",children:this.state.hasTeams&&this.state.hasQuotes?Object(w.jsx)(g,{rounds:this.state.rounds,bracket:this.state.bracket,teams:this.state.teams,handleSeedChange:this.handleSeedChange,determineWinner:this.determineWinner,pickWinner:this.pickWinner,unPickWinner:this.unPickWinner}):Object(w.jsx)("h3",{children:"Loading..."})})}}]),n}(r.Component),T=function(s){s&&s instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(i){var n=i.getCLS,t=i.getFID,r=i.getFCP,e=i.getLCP,o=i.getTTFB;n(s),t(s),r(s),e(s),o(s)}))};p.a.render(Object(w.jsx)(e.a.StrictMode,{children:Object(w.jsx)(D,{})}),document.getElementById("root")),T()}},[[89,1,2]]]);
//# sourceMappingURL=main.5b78f64a.chunk.js.map