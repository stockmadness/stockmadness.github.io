(this["webpackJsonpstonk-madness"]=this["webpackJsonpstonk-madness"]||[]).push([[0],{37:function(s,i,t){},38:function(s,i,t){},77:function(s,i,t){"use strict";t.r(i);var n=t(2),r=t.n(n),e=t(30),o=t.n(e),p=(t(37),t(20)),a=t(3),h=t(4),c=t(6),d=t(5),u=(t(38),{a:{0:[{teamA:"WBA",teamB:"CVS",winner:"CVS"},{teamA:"WMT",teamB:"COST",winner:"COST"},{teamA:"UNH",teamB:"HUM",winner:"UNH"},{teamA:"AMGN",teamB:"DXCM",winner:"DXCM"},{teamA:"JNJ",teamB:"BSX",winner:"BSX"},{teamA:"HD",teamB:"LOW",winner:"HD"},{teamA:"MRK",teamB:"PFE",winner:"PFE"},{teamA:"JPM",teamB:"BAC",winner:"BAC"}],1:[{teamA:"CVS",teamB:"COST",winner:!1},{teamA:"UNH",teamB:"DXCM",winner:!1},{teamA:"BSX",teamB:"HD",winner:!1},{teamA:"PFE",teamB:"BAC",winner:!1}],2:[{teamA:!1,teamB:!1,winner:!1},{teamA:!1,teamB:!1,winner:!1}],3:[{teamA:!1,teamB:!1,winner:!1}],4:[{teamA:!1,teamB:!1,winner:!1}]},b:{0:[{teamA:"CAT",teamB:"DE",winner:"DE"},{teamA:"FCX",teamB:"MLM",winner:"FCX"},{teamA:"CRM",teamB:"ADSK",winner:"CRM"},{teamA:"HON",teamB:"LMT",winner:"LMT"},{teamA:"PG",teamB:"CLX",winner:"PG"},{teamA:"TRV",teamB:"ALL",winner:"ALL"},{teamA:"NKE",teamB:"POOL",winner:"POOL"},{teamA:"BA",teamB:"GE",winner:"GE"}],1:[{teamA:"DE",teamB:"FCX",winner:!1},{teamA:"CRM",teamB:"LMT",winner:!1},{teamA:"PG",teamB:"ALL",winner:!1},{teamA:"POOL",teamB:"GE",winner:!1}],2:[{teamA:!1,teamB:!1,winner:!1},{teamA:!1,teamB:!1,winner:!1}],3:[{teamA:!1,teamB:!1,winner:!1}],4:[{teamA:!1,teamB:!1,winner:!1}]},c:{0:[{teamA:"INTC",teamB:"AMD",winner:"AMD"},{teamA:"AAPL",teamB:"QCOM",winner:"AAPL"},{teamA:"IBM",teamB:"AMAT",winner:"IBM"},{teamA:"MSFT",teamB:"ADBE",winner:"MSFT"},{teamA:"DIS",teamB:"VIAC",winner:"DIS"},{teamA:"CSCO",teamB:"ASML",winner:"ASML"},{teamA:"VZ",teamB:"TMUS",winner:"TMUS"},{teamA:"GS",teamB:"MS",winner:"GS"}],1:[{teamA:"AMD",teamB:"AAPL",winner:!1},{teamA:"IBM",teamB:"MSFT",winner:!1},{teamA:"DIS",teamB:"ASML",winner:!1},{teamA:"TMUS",teamB:"GS",winner:!1}],2:[{teamA:!1,teamB:!1,winner:!1},{teamA:!1,teamB:!1,winner:!1}],3:[{teamA:!1,teamB:!1,winner:!1}],4:[{teamA:!1,teamB:!1,winner:!1}]},d:{0:[{teamA:"CVX",teamB:"HAL",winner:"CVX"},{teamA:"NEE",teamB:"ETR",winner:"ETR"},{teamA:"MCD",teamB:"SBUX",winner:"MCD"},{teamA:"MMM",teamB:"PPG",winner:"PPG"},{teamA:"V",teamB:"MA",winner:"V"},{teamA:"DOW",teamB:"DD",winner:"DD"},{teamA:"KO",teamB:"PEP",winner:"PEP"},{teamA:"AXP",teamB:"PYPL",winner:"AXP"}],1:[{teamA:"CVX",teamB:"ETR",winner:!1},{teamA:"MCD",teamB:"PPG",winner:!1},{teamA:"V",teamB:"DD",winner:!1},{teamA:"PEP",teamB:"AXP",winner:!1}],2:[{teamA:!1,teamB:!1,winner:!1},{teamA:!1,teamB:!1,winner:!1}],3:[{teamA:!1,teamB:!1,winner:!1}],4:[{teamA:!1,teamB:!1,winner:!1}]},m:{0:[{teamA:!1,teamB:!1,winner:!1}]},n:{0:[{teamA:!1,teamB:!1,winner:!1}]},o:{0:[{teamA:!1,teamB:!1,winner:!1}]},y:{0:[{teamA:"SPY",teamB:"QQQ",winner:!1}]},z:{0:[{teamA:"STONKS",teamB:"DIA",winner:!1}]}}),m=[{number:0,name:"First Round",start:"2021-04-01",end:"2021-04-30",stakes:10,incremental:640,show:!0},{number:1,name:"Second Round",start:"2021-05-03",end:"2021-05-27",stakes:80,incremental:640,show:!0},{number:2,name:"Sweet 16",start:"2021-06-01",end:"2021-06-30",stakes:160,incremental:1280,show:!1},{number:3,name:"Elite 8",start:"2021-07-01",end:"2021-07-30",stakes:640,incremental:2560,show:!1},{number:4,name:"Final 4",start:"2021-08-02",end:"2021-08-31",stakes:2400,incremental:5120,show:!1},{number:5,name:"Championship",start:"2021-09-01",end:"2021-09-30",stakes:5e3,incremental:0,show:!1}],l=t(31),k=t.n(l),b=t(12),W=t.n(b),j=t(0),O=function(s){Object(c.a)(t,s);var i=Object(d.a)(t);function t(){return Object(a.a)(this,t),i.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){var s=this,i="is-light",t="";this.props.team&&"darkGreen"===this.props.status&&(i="is-success",t="has-text-weight-bold"),this.props.team&&"lightGreen"===this.props.status&&(i="is-success is-light"),this.props.team&&"lightRed"===this.props.status&&(i="is-danger is-light",t="has-text-weight-bold"),this.props.team&&"darkRed"===this.props.status&&(i="is-danger");var n="is-medium "+i,r=this.props.team&&this.props.winner?this.props.winner===this.props.team.name?"has-background-link has-text-white "+t:"has-background-warning has-text-danger "+t:"",e=this.props.team?"".concat(this.props.team.name):"Undecided",o=this.props.team.scores.find((function(i){return i.number===s.props.round})),p=this.props.team.currentRoundScore;void 0!==o&&(p=o.score);var a=this.props.team?Object(j.jsx)(k.a,{className:n,children:Math.round(1e4*p)/100}):"";return Object(j.jsxs)(W.a,{className:r,onClick:this.handlePickWinner,children:[Object(j.jsxs)("span",{className:"is-size-4",children:[e," "]}),a]})}}]),t}(r.a.Component),x=function(s){Object(c.a)(t,s);var i=Object(d.a)(t);function t(){return Object(a.a)(this,t),i.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){var s=this,i=this.props.teams[this.props.bracket[this.props.division][this.props.round][this.props.matchId].teamA],t=this.props.teams[this.props.bracket[this.props.division][this.props.round][this.props.matchId].teamB],n=this.props.bracket[this.props.division][this.props.round][this.props.matchId].winner,r="tied",e="tied",o=null;if(i&&t){var p=i.scores.find((function(i){return i.number===s.props.round})),a=t.scores.find((function(i){return i.number===s.props.round})),h=i.currentRoundScore,c=t.currentRoundScore;void 0!==p&&(h=p.score),void 0!==a&&(c=a.score),h>c&&(r=h>=0?"darkGreen":"lightRed",e=c>=0?"lightGreen":"darkRed"),h<c&&(r=h>=0?"lightGreen":"darkRed",e=c>=0?"darkGreen":"lightRed")}if(n)o=n;else if(i&&t){var d=i.scores.find((function(i){return i.number===s.props.round})),u=t.scores.find((function(i){return i.number===s.props.round}));d&&u&&(d.score>u.score?o=i.name:u.score>d.score&&(o=t.name))}return Object(j.jsxs)(W.a,{className:"has-background-light",children:[Object(j.jsx)(O,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,team:i,status:r,round:this.props.round,division:this.props.division,matchId:this.props.matchId,winner:o,handleSeedChange:this.props.handleSeedChange}),Object(j.jsx)(O,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,team:t,status:e,round:this.props.round,division:this.props.division,matchId:this.props.matchId,winner:o,handleSeedChange:this.props.handleSeedChange})]})}}]),t}(r.a.Component),w=t(1),P=t.n(w),A=t(7),v=t.n(A),C=t(11),R=t.n(C),y=function(s){Object(c.a)(t,s);var i=Object(d.a)(t);function t(){return Object(a.a)(this,t),i.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)(P.a,{children:[Object(j.jsx)(P.a.Column,{size:this.props.compsWidth,children:Object(j.jsx)(x,{round:0,division:"y",matchId:0,teams:this.props.teams,bracket:this.props.bracket})}),Object(j.jsxs)(P.a.Column,{size:this.props.titleWidth,children:[Object(j.jsx)(v.a,{className:"title is-1 is-spaced",children:"Stonk Madness"}),Object(j.jsxs)(v.a,{className:"subtitle",children:["Score as of ",this.props.scoreDate]})]}),Object(j.jsx)(P.a.Column,{size:this.props.compsWidth,children:Object(j.jsx)(x,{round:0,division:"z",matchId:0,teams:this.props.teams,bracket:this.props.bracket})})]}),Object(j.jsxs)(P.a,{children:[this.props.rounds[0].show&&Object(j.jsx)(P.a.Column,{size:this.props.earlyRoundWidth,children:Object(j.jsx)(v.a,{className:"title is-4",children:this.props.rounds[0].name})}),this.props.rounds[1].show&&Object(j.jsx)(P.a.Column,{size:this.props.earlyRoundWidth,children:Object(j.jsx)(v.a,{className:"title is-4",children:this.props.rounds[1].name})}),this.props.rounds[2].show&&Object(j.jsx)(P.a.Column,{size:this.props.earlyRoundWidth,children:Object(j.jsx)(v.a,{className:"title is-4",children:this.props.rounds[2].name})}),this.props.rounds[3].show&&Object(j.jsx)(P.a.Column,{size:this.props.earlyRoundWidth,children:Object(j.jsx)(v.a,{className:"title is-4",children:this.props.rounds[3].name})}),this.props.rounds[4].show&&Object(j.jsx)(P.a.Column,{size:this.props.earlyRoundWidth,children:Object(j.jsx)(v.a,{className:"title is-4",children:this.props.rounds[4].name})}),this.props.rounds[5].show&&Object(j.jsx)(P.a.Column,{size:this.props.championshipWidth,children:Object(j.jsx)(v.a,{className:"title is-4",children:this.props.rounds[5].name})}),this.props.rounds[4].show&&Object(j.jsx)(P.a.Column,{size:this.props.earlyRoundWidth,children:Object(j.jsx)(v.a,{className:"title is-4",children:this.props.rounds[4].name})}),this.props.rounds[3].show&&Object(j.jsx)(P.a.Column,{size:this.props.earlyRoundWidth,children:Object(j.jsx)(v.a,{className:"title is-4",children:this.props.rounds[3].name})}),this.props.rounds[2].show&&Object(j.jsx)(P.a.Column,{size:this.props.earlyRoundWidth,children:Object(j.jsx)(v.a,{className:"title is-4",children:this.props.rounds[2].name})}),this.props.rounds[1].show&&Object(j.jsx)(P.a.Column,{size:this.props.earlyRoundWidth,children:Object(j.jsx)(v.a,{className:"title is-4",children:this.props.rounds[1].name})}),this.props.rounds[0].show&&Object(j.jsx)(P.a.Column,{size:this.props.earlyRoundWidth,children:Object(j.jsx)(v.a,{className:"title is-4",children:this.props.rounds[0].name})})]}),Object(j.jsxs)(P.a,{children:[this.props.rounds[0].show&&Object(j.jsxs)(P.a.Column,{size:this.props.earlyRoundWidth,children:[this.props.rounds[0].start," to ",this.props.rounds[0].end]}),this.props.rounds[1].show&&Object(j.jsxs)(P.a.Column,{size:this.props.earlyRoundWidth,children:[this.props.rounds[1].start," to ",this.props.rounds[1].end]}),this.props.rounds[2].show&&Object(j.jsxs)(P.a.Column,{size:this.props.earlyRoundWidth,children:[this.props.rounds[2].start," to ",this.props.rounds[2].end]}),this.props.rounds[3].show&&Object(j.jsxs)(P.a.Column,{size:this.props.earlyRoundWidth,children:[this.props.rounds[3].start," to ",this.props.rounds[3].end]}),this.props.rounds[4].show&&Object(j.jsxs)(P.a.Column,{size:this.props.earlyRoundWidth,children:[this.props.rounds[4].start," to ",this.props.rounds[4].end]}),this.props.rounds[5].show&&Object(j.jsxs)(P.a.Column,{size:this.props.championshipWidth,children:[this.props.rounds[5].start," to ",this.props.rounds[5].end]}),this.props.rounds[4].show&&Object(j.jsxs)(P.a.Column,{size:this.props.earlyRoundWidth,children:[this.props.rounds[4].start," to ",this.props.rounds[4].end]}),this.props.rounds[3].show&&Object(j.jsxs)(P.a.Column,{size:this.props.earlyRoundWidth,children:[this.props.rounds[3].start," to ",this.props.rounds[3].end]}),this.props.rounds[2].show&&Object(j.jsxs)(P.a.Column,{size:this.props.earlyRoundWidth,children:[this.props.rounds[2].start," to ",this.props.rounds[2].end]}),this.props.rounds[1].show&&Object(j.jsxs)(P.a.Column,{size:this.props.earlyRoundWidth,children:[this.props.rounds[1].start," to ",this.props.rounds[1].end]}),this.props.rounds[0].show&&Object(j.jsxs)(P.a.Column,{size:this.props.earlyRoundWidth,children:[this.props.rounds[0].start," to ",this.props.rounds[0].end]})]}),Object(j.jsxs)(P.a,{children:[this.props.rounds[0].show&&Object(j.jsx)(P.a.Column,{size:this.props.earlyRoundWidth,children:Object(j.jsx)(R.a,{className:"is-info",value:22,max:22,children:"90%"})}),this.props.rounds[1].show&&Object(j.jsx)(P.a.Column,{size:this.props.earlyRoundWidth,children:Object(j.jsx)(R.a,{className:"is-info",value:0,max:100,children:"45%"})}),this.props.rounds[2].show&&Object(j.jsx)(P.a.Column,{size:this.props.earlyRoundWidth,children:Object(j.jsx)(R.a,{className:"is-info",value:0,max:100,children:"45%"})}),this.props.rounds[3].show&&Object(j.jsx)(P.a.Column,{size:this.props.earlyRoundWidth,children:Object(j.jsx)(R.a,{className:"is-info",value:0,max:100,children:"45%"})}),this.props.rounds[4].show&&Object(j.jsx)(P.a.Column,{size:this.props.earlyRoundWidth,children:Object(j.jsx)(R.a,{className:"is-info",value:0,max:100,children:"45%"})}),this.props.rounds[5].show&&Object(j.jsx)(P.a.Column,{size:this.props.championshipWidth,children:Object(j.jsx)(R.a,{className:"is-info",value:0,max:100,children:"45%"})}),this.props.rounds[4].show&&Object(j.jsx)(P.a.Column,{size:this.props.earlyRoundWidth,children:Object(j.jsx)(R.a,{className:"is-info",value:0,max:100,children:"45%"})}),this.props.rounds[3].show&&Object(j.jsx)(P.a.Column,{size:this.props.earlyRoundWidth,children:Object(j.jsx)(R.a,{className:"is-info",value:0,max:100,children:"45%"})}),this.props.rounds[2].show&&Object(j.jsx)(P.a.Column,{size:this.props.earlyRoundWidth,children:Object(j.jsx)(R.a,{className:"is-info",value:0,max:100,children:"45%"})}),this.props.rounds[1].show&&Object(j.jsx)(P.a.Column,{size:this.props.earlyRoundWidth,children:Object(j.jsx)(R.a,{className:"is-info",value:0,max:100,children:"45%"})}),this.props.rounds[0].show&&Object(j.jsx)(P.a.Column,{size:this.props.earlyRoundWidth,children:Object(j.jsx)(R.a,{className:"is-info",value:22,max:22,children:"90%"})})]})]})}}]),t}(r.a.Component),B=(r.a.Component,function(s){Object(c.a)(t,s);var i=Object(d.a)(t);function t(){return Object(a.a)(this,t),i.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsxs)(P.a,{children:[this.props.rounds[0].show&&Object(j.jsx)(P.a.Column,{size:this.props.earlyRoundWidth,children:0===this.props.round&&Object(j.jsx)(x,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:this.props.round,division:this.props.divisions[0],matchId:this.props.matchId,teams:this.props.teams,bracket:this.props.bracket},this.props.matchId)}),this.props.rounds[1].show&&Object(j.jsxs)(P.a.Column,{size:this.props.earlyRoundWidth,children:[0===this.props.round&&false,1===this.props.round&&Object(j.jsx)(x,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:this.props.round,division:this.props.divisions[0],matchId:this.props.matchId,teams:this.props.teams,bracket:this.props.bracket},this.props.matchId)]}),this.props.rounds[2].show&&Object(j.jsx)(P.a.Column,{size:this.props.earlyRoundWidth,children:2===this.props.round&&Object(j.jsx)(x,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:this.props.round,division:this.props.divisions[0],matchId:this.props.matchId,teams:this.props.teams,bracket:this.props.bracket},this.props.matchId)}),this.props.rounds[3].show&&Object(j.jsx)(P.a.Column,{size:this.props.earlyRoundWidth,children:3===this.props.round&&Object(j.jsx)(x,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:this.props.round,division:this.props.divisions[0],matchId:this.props.matchId,teams:this.props.teams,bracket:this.props.bracket},this.props.matchId)}),this.props.rounds[4].show&&Object(j.jsx)(P.a.Column,{size:this.props.earlyRoundWidth,children:4===this.props.round&&Object(j.jsx)(x,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:this.props.round,division:this.props.divisions[0],matchId:this.props.matchId,teams:this.props.teams,bracket:this.props.bracket},this.props.matchId)}),this.props.rounds[5].show&&Object(j.jsx)(P.a.Column,{size:this.props.championshipWidth,children:5===this.props.round&&Object(j.jsx)(x,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:this.props.round,division:this.props.divisions[2],matchId:this.props.matchId,teams:this.props.teams,bracket:this.props.bracket},this.props.matchId)}),this.props.rounds[4].show&&Object(j.jsx)(P.a.Column,{size:this.props.earlyRoundWidth,children:4===this.props.round&&Object(j.jsx)(x,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:this.props.round,division:this.props.divisions[1],matchId:this.props.matchId,teams:this.props.teams,bracket:this.props.bracket},this.props.matchId)}),this.props.rounds[3].show&&Object(j.jsx)(P.a.Column,{size:this.props.earlyRoundWidth,children:3===this.props.round&&Object(j.jsx)(x,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:this.props.round,division:this.props.divisions[1],matchId:this.props.matchId,teams:this.props.teams,bracket:this.props.bracket},this.props.matchId)}),this.props.rounds[2].show&&Object(j.jsx)(P.a.Column,{size:this.props.earlyRoundWidth,children:2===this.props.round&&Object(j.jsx)(x,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:this.props.round,division:this.props.divisions[1],matchId:this.props.matchId,teams:this.props.teams,bracket:this.props.bracket},this.props.matchId)}),this.props.rounds[1].show&&Object(j.jsxs)(P.a.Column,{size:this.props.earlyRoundWidth,children:[0===this.props.round&&false,1===this.props.round&&Object(j.jsx)(x,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:this.props.round,division:this.props.divisions[1],matchId:this.props.matchId,teams:this.props.teams,bracket:this.props.bracket},this.props.matchId)]}),this.props.rounds[0].show&&Object(j.jsx)(P.a.Column,{size:this.props.earlyRoundWidth,children:0===this.props.round&&Object(j.jsx)(x,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,division:this.props.divisions[1],matchId:this.props.matchId,teams:this.props.teams,bracket:this.props.bracket},this.props.matchId)})]})})}}]),t}(r.a.Component)),I=function(s){Object(c.a)(t,s);var i=Object(d.a)(t);function t(){return Object(a.a)(this,t),i.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){var s=7,i=this.props.rounds.filter((function(s){return!0===s.show&&5!==s.number})).length,t=this.props.rounds.find((function(s){return 5===s.number})).show,n=1,r=0;switch(t||(s=8),i){case 1:t?(n=5,r=1):n=6;break;case 2:t?(n=2,r=3):n=3;break;case 3:t?(n=1,r=5):n=2;break;case 4:t?(n=1,r=3):(n=1,s=4);break;case 5:t?(n=1,r=3):(n=1,s=6);break;default:n=1,r=1}return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(y,{rounds:this.props.rounds,scoreDate:this.props.teams.CAT.currentScoreDate,teams:this.props.teams,bracket:this.props.bracket,compsWidth:2,titleWidth:s,earlyRoundWidth:n,championshipWidth:r}),this.props.rounds[0].show&&Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["a","c"],matchId:0,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),this.props.rounds[1].show&&Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:1,divisions:["a","c"],matchId:0,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["a","c"],matchId:1,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:2,divisions:["a","c"],matchId:0,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["a","c"],matchId:2,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:1,divisions:["a","c"],matchId:1,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["a","c"],matchId:3,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:3,divisions:["a","c"],matchId:0,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["a","c"],matchId:4,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:1,divisions:["a","c"],matchId:2,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["a","c"],matchId:5,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:2,divisions:["a","c"],matchId:1,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["a","c"],matchId:6,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:1,divisions:["a","c"],matchId:3,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["a","c"],matchId:7,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:4,divisions:["a","c","o"],matchId:0,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["b","d"],matchId:0,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:1,divisions:["b","d"],matchId:0,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["b","d"],matchId:1,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:2,divisions:["b","d"],matchId:0,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["b","d"],matchId:2,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:1,divisions:["b","d"],matchId:1,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["b","d"],matchId:3,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:3,divisions:["b","d"],matchId:0,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["b","d"],matchId:4,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:1,divisions:["b","d"],matchId:2,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["b","d"],matchId:5,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:2,divisions:["b","d"],matchId:1,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["b","d"],matchId:6,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:1,divisions:["b","d"],matchId:3,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r}),Object(j.jsx)(B,{pickWinner:this.props.pickWinner,unPickWinner:this.props.unPickWinner,round:0,divisions:["b","d"],matchId:7,teams:this.props.teams,bracket:this.props.bracket,rounds:this.props.rounds,earlyRoundWidth:n,championshipWidth:r})]})}}]),t}(r.a.Component),f=t(15),M=t.n(f);new(t(32).a)("G-ECS66VT57V").initialize().then((function(s){s.pageview("path"),s.gtag("event","pageview","path")}),(function(s){console.error(s)}));var S=function(s){Object(c.a)(t,s);var i=Object(d.a)(t);function t(s){var n;return Object(a.a)(this,t),(n=i.call(this,s)).calculateCurrentScore=function(s,i){var t=n.state.rounds,r=0,e=0;for(var o in i){var p=i[o],a=s[p.symbol],h=p.last,c=p.last_time,d=null,u=function(i){var n=a.prices.find((function(s){return s.date===t[i].start})),o=a.prices.find((function(s){return s.date===t[i].end}));if(void 0!==n&&void 0===o&&(d=h/n.open-1,s[p.symbol].currentRoundScore=d,s[p.symbol].latestPrice=h,s[p.symbol].currentScoreDate=c,"CAT|BA|TRV|HON|CRM|PG|NKE|FCX|MLM|POOL|CLX|ADSK|LMT|ALL|GE|DE|WBA|JPM|HD|AMGN|UNH|JNJ|MRK|WMT|COST|PFE|BSX|HUM|DXCM|LOW|BAC|CVS|INTC|GS|CSCO|MSFT|IBM|DIS|VZ|AAPL|QCOM|TMUS|VIAC|AMAT|ADBE|ASML|MS|AMD|CVX|AXP|DOW|MMM|MCD|V|KO|NEE|ETR|PEP|MA|SBUX|PPG|DD|PYPL|HAL".split("|").includes(p.symbol))){var u=t[i].stakes;r+=u,e+=u+u*d}if(void 0===n&&void 0===o)return"break"};for(var m in t){if("break"===u(m))break}}var l=e/r-1;return s.STONKS.currentRoundScore=l,s},n.pickWinner=function(s){s.team;var i=s.round,t=s.division,r=s.matchId,e=s.winner,o=Object(p.a)({},n.state.bracket),a=parseInt(i)+1,h=Math.floor(r/2),c=r%2?"teamB":"teamA";console.log("d",t),console.log(i),console.log(r),console.log(e),o[t][i][r].winner=e,o[t][a][h][c]=e,console.log("hey",e),n.setState({bracket:o})},n.unPickWinner=function(s){s.team;var i=s.round,t=s.division,r=s.matchId,e=s.winner,o=Object(p.a)({},n.state.bracket),a=parseInt(i)+1,h=Math.floor(r/2),c=r%2?"teamB":"teamA";console.log("d",t),console.log(i),console.log(r),console.log(e),o[t][i][r].winner=!1,o[t][a][2*h][c]=!1,o[t][i-1][2*r].winner=!1,n.setState({bracket:o})},n.state={bracket:u,hasTeams:!1,hasQuotes:!1,rounds:m,teams:[],currentQuotes:[]},n.coinFlips=[],n}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var s=this;M.a.all([M.a.get("./data/teams.json"),M.a.get("./data/intradayQuotes.json")]).then(M.a.spread((function(i,t){var n=s.calculateCurrentScore(i.data.teams,t.data.FormattedQuoteResult.FormattedQuote);s.setState({teams:n,hasTeams:!0,currentQuotes:t.data.FormattedQuoteResult.FormattedQuote,hasQuotes:!0})})))}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"App",children:this.state.hasTeams&&this.state.hasQuotes?Object(j.jsx)(I,{rounds:this.state.rounds,bracket:this.state.bracket,teams:this.state.teams,handleSeedChange:this.handleSeedChange,determineWinner:this.determineWinner,pickWinner:this.pickWinner,unPickWinner:this.unPickWinner}):Object(j.jsx)("h3",{children:"Loading..."})})}}]),t}(n.Component),z=function(s){s&&s instanceof Function&&t.e(3).then(t.bind(null,78)).then((function(i){var t=i.getCLS,n=i.getFID,r=i.getFCP,e=i.getLCP,o=i.getTTFB;t(s),n(s),r(s),e(s),o(s)}))};o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),z()}},[[77,1,2]]]);
//# sourceMappingURL=main.7c0884f3.chunk.js.map