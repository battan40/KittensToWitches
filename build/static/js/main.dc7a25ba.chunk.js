(this["webpackJsonpkittens-to-witches"]=this["webpackJsonpkittens-to-witches"]||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),i=n(20),c=n.n(i),r=(n(28),n(16)),o=n.n(r),l=n(21),p=n(19),u=n(10),d=n(11),h=n(13),j=n(12),b=(n(30),n(0)),f=function(e){var t=e.keep,n=e.favoriteSpell,s=e.id,a=e.title,i=e.description,c=t?"Forget \ud83d\udd2e":"Keep \ud83e\ude84";return Object(b.jsxs)("article",{className:"spell-card",children:[Object(b.jsx)("h2",{className:"invocation",children:"\u2728Ashe\u2728"}),Object(b.jsx)("h3",{className:"title",children:a}),Object(b.jsx)("p",{className:"spell",children:i}),Object(b.jsx)("button",{className:"love-button",onClick:function(){return n(s)},children:c})]})},m=(n(32),function(e){var t=e.spells,n=e.favoriteSpell,s=t.map((function(e){return Object(b.jsx)(f,{id:e.id,title:e.title,description:e.description,keep:e.keep,favoriteSpell:n},e.id)}));return Object(b.jsx)("article",{className:"spell-box",children:s})}),O=n(22),x=(n(33),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).handleChange=function(e){s.setState(Object(O.a)({},e.target.name,e.target.value))},s.sendSpell=function(e){var t={title:s.state.title,description:s.state.description};s.props.addSpell(t),s.clearInputs()},s.clearInputs=function(){s.setState({title:"",description:""})},s.state={id:"",title:"",description:""},s}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("form",{className:"form-box",children:[Object(b.jsx)("input",{className:"title-input",type:"text",placeholder:"Name Spell",name:"title",value:this.state.title,onChange:function(t){return e.handleChange(t)}}),Object(b.jsx)("input",{className:"spell-composition",type:"text",placeholder:"Compose Spell",name:"description",value:this.state.description,onChange:function(t){return e.handleChange(t)}}),Object(b.jsx)("button",{className:"send-spell",type:"button",onClick:function(){return e.sendSpell()},children:"Cast Spell"})]})}}]),n}(s.Component)),v=(n(34),function(e){var t=e.swanspiration;return Object(b.jsxs)("article",{className:"kit-card",children:[Object(b.jsx)("img",{className:"cat-pic",src:t.kittenFamiliar,alt:"Adorable kitten familiar"}),Object(b.jsx)("p",{className:"ronspiration",children:t.swanspiration})]})}),g=n(7),S=(n(35),function(){return Object(b.jsxs)("section",{className:"about-box",children:[Object(b.jsx)("h1",{className:"about-title",children:"\u2728Why Swanspirations?"}),Object(b.jsx)("p",{className:"about-body",children:"Sometimes inspiration comes from the strangest of places.  This app was created with the intention of offering the ridiculous wisdom and folly of Ron Swanson.  Then it only seemed right to send Ron Swanson messages with a kitten familiar.  The hope is that you feel at home, laugh and then feel inspired to cast a spell.\u2728"}),Object(b.jsx)(g.b,{to:"/",children:Object(b.jsx)("button",{className:"about-home",children:"Home \ud83e\ude84"})})]})}),N=(n(44),function(){return Object(b.jsxs)("section",{children:[Object(b.jsx)("h1",{className:"error-page",children:"404 Page Not Found"}),Object(b.jsx)(g.b,{to:"/",children:Object(b.jsx)("button",{className:"error-home",children:"Home \ud83e\ude84"})})]})}),k=(n(45),function(e){var t=e.spells,n=e.favoriteSpell,s=t.map((function(e){return Object(b.jsx)(f,{id:e.id,title:e.title,description:e.description,keep:e.keep,favoriteSpell:n},e.id)}));return Object(b.jsxs)("article",{className:"spell-box",children:[s,Object(b.jsx)(g.b,{to:"/",children:Object(b.jsx)("button",{className:"error-home",children:"Home"})})]})}),w=n(2),y=n.p+"static/media/enchantedForest.3b87ed50.png",C=(n(46),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).addSpell=function(t){t.id=e.state.spells.length+1,console.log(t),e.setState({spells:[].concat(Object(p.a)(e.state.spells),[t])})},e.renderSpells=function(){return e.state.spells.length?Object(b.jsx)(m,{spells:e.state.spells,favoriteSpell:e.favoriteSpell}):Object(b.jsx)("h1",{className:"invitation ",children:"Cast your hearts desire"})},e.favoriteSpell=function(t){var n=e.state.spells.find((function(e){return e.id===t}));n.keep=!n.keep,e.setState({spells:Object(p.a)(e.state.spells)})},e.componentDidMount=Object(l.a)(o.a.mark((function t(){var n,s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes").then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return"This swanspiration is experiencing delays.  Please try again later"})).then((function(e){return e[0]}));case 2:return n=t.sent,t.next=5,fetch("https://aws.random.cat/meow").then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return"Whoops looks like your kitten familiar is out playing today.  Lets try this again later"})).then((function(e){return e.file}));case 5:s=t.sent,a={swanspiration:n,kittenFamiliar:s},e.setState({swanspiration:a}),e.setState({loading:!1});case 9:case"end":return t.stop()}}),t)}))),e.state={keep:!1,loading:!0,swanspiration:"",spells:[],error:""},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)(w.c,{children:[Object(b.jsx)(w.a,{path:"/favorites",render:function(){var t=e.state.spells.filter((function(e){return e.keep}));return Object(b.jsx)(k,{spells:t})}}),Object(b.jsx)(w.a,{path:"/about",component:S}),Object(b.jsx)(w.a,{exact:!0,path:"/",render:function(){return Object(b.jsxs)("main",{className:"App",style:{backgroundImage:"url(".concat(y,")")},children:[Object(b.jsx)("h1",{className:"app-title",children:"Kittens To Witches"}),e.state.loading&&Object(b.jsx)("p",{className:"loading",children:"Loading..."}),e.state.swanspiration&&Object(b.jsx)(v,{swanspiration:e.state.swanspiration}),Object(b.jsx)(x,{addSpell:e.addSpell}),e.state.error&&Object(b.jsx)("h2",{children:e.state.error}),e.renderSpells(),Object(b.jsxs)("div",{className:"should-be-footer",children:[Object(b.jsx)(g.b,{to:"/about",children:Object(b.jsx)("p",{className:"about",children:"About Us"})}),Object(b.jsx)(g.b,{to:"/favorites",children:Object(b.jsx)("p",{className:"favs",children:"Visit Favorites"})})]})]})}}),Object(b.jsx)(w.a,{path:"/404",component:N})]})}}]),n}(s.Component)),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(g.a,{children:Object(b.jsx)(C,{})})}),document.getElementById("root")),F()}},[[47,1,2]]]);
//# sourceMappingURL=main.dc7a25ba.chunk.js.map