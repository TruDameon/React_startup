(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{102:function(e,a,t){},150:function(e,a,t){},151:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),s=t.n(l),o=(t(99),t(100),t(101),t(102),t(19)),c=t(20),m=t(22),i=t(21),u=t(152),d=t(153),h=t(154),E=t(155),f=t(156),p=t(157),g=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))},b="http://localhost:3001/",v=t(37);function N(e){var a=e.item,t=e.isLoading,n=e.errMess;return t?r.a.createElement(g,null):n?r.a.createElement("h4",null,n):r.a.createElement(v.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{src:b+a.image,alt:a.name}),r.a.createElement(h.a,null,r.a.createElement(E.a,null,a.name),a.designation?r.a.createElement(f.a,null,a.designation):null,r.a.createElement(p.a,null,a.description))))}var y=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(N,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(N,{item:e.promotion,isLoading:e.promosLoading,errMess:e.promosErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(N,{item:e.leader}))))},w=t(158),O=t(159),M=t(160),k=t(7);function C(e){var a=e.dish;return r.a.createElement(u.a,null,r.a.createElement(k.b,{to:"/menu/".concat(a.id)},r.a.createElement(d.a,{width:"100%",object:!0,src:b+a.image,alt:a.name}),r.a.createElement(w.a,null,r.a.createElement(E.a,null,a.name))))}var j=function(e){var a=e.dishes.dishes.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-12 col-md-5 m-1"},r.a.createElement(C,{dish:e}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(g,null))):e.dishes.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,e.dishes.errMess)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(O.a,null,r.a.createElement(M.a,null,r.a.createElement(k.b,{to:"/home"},"Home")),r.a.createElement(M.a,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},a))},L=t(23),S=t(161),x=t(162),F=t(163),D=t(164),A=t(9),I=function(e){return e&&e.length},T=function(e){return function(a){return!a||a.length<=e}},H=function(e){return function(a){return a&&a.length>=e}},P=function(e){return!isNaN(Number(e))},R=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},q=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(L.a)(n)),n}return Object(c.a)(t,[{key:"handleSubmit",value:function(e){console.log("Current State is: "+JSON.stringify(e)),alert("Current State is: "+JSON.stringify(e)),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(O.a,null,r.a.createElement(M.a,null,r.a.createElement(k.b,{to:"/home"},"Home")),r.a.createElement(M.a,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info",href:"/"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us Your Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(A.Form,{model:"feedback",onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement(S.a,{className:"form-group"},r.a.createElement(x.a,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(F.a,{md:10},r.a.createElement(A.Control.text,{model:".firstname",className:"form-control",id:"firstname",name:"firstname",placeholder:"First Name",validators:{required:I,minLength:H(3),maxLength:T(15)}}),r.a.createElement(A.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(x.a,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(F.a,{md:10},r.a.createElement(A.Control.text,{model:".lastname",className:"form-control",id:"lastname",name:"lastname",placeholder:"Last Name",validators:{required:I,minLength:H(3),maxLength:T(15)}}),r.a.createElement(A.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(x.a,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(F.a,{md:10},r.a.createElement(A.Control.text,{model:".telnum",className:"form-control",id:"telnum",name:"telnum",placeholder:"Telephone No.",validators:{required:I,minLength:H(3),maxLength:T(15),isNumber:P}}),r.a.createElement(A.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a Number"}}))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(x.a,{htmlFor:"email",md:2},"Email"),r.a.createElement(F.a,{md:10},r.a.createElement(A.Control.text,{model:".email",className:"form-control",id:"email",name:"email",placeholder:"Email",validators:{required:I,validEmail:R}}),r.a.createElement(A.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid email address"}}))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(F.a,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(x.a,{check:!0},r.a.createElement(A.Control.checkbox,{model:".agree",className:"form-check-input",name:"agree"})," "," "," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(F.a,{md:{size:3,offset:1}},r.a.createElement(A.Control.select,{model:".contactType",className:"form-control",name:"contactType"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(x.a,{htmlFor:"feedback",md:2},"Your Feedback"),r.a.createElement(F.a,{md:10},r.a.createElement(A.Control.textarea,{model:".message",className:"form-control",id:"message",name:"message",rows:"12"}))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(F.a,{md:{size:10,offset:2}},r.a.createElement(D.a,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),t}(n.Component),_=t(165),W=t(166);function Y(e){var a=e.leaders.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-12 mt-3"},r.a.createElement(_.a,{tag:"li"},r.a.createElement(_.a,{left:!0},r.a.createElement(_.a,{object:!0,src:e.image,alt:e.name})),r.a.createElement(_.a,{body:!0,className:"ml-5"},r.a.createElement(_.a,{heading:!0},e.name),r.a.createElement("p",null,e.designation),r.a.createElement("p",null,e.description))))}));return r.a.createElement("div",{className:"row"},r.a.createElement(_.a,{list:!0},a))}var z=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(O.a,null,r.a.createElement(M.a,null,r.a.createElement(k.b,{to:"/home"},"Home")),r.a.createElement(M.a,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(u.a,null,r.a.createElement(W.a,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(h.a,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(u.a,null,r.a.createElement(h.a,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(_.a,{list:!0},r.a.createElement(Y,{leaders:e.leaders})))))},B=t(179),U=t(167),G=t(168),K=function(e){return e&&e.length},J=function(e){return function(a){return!a||a.length<=e}};function Z(e){var a=e.comments,t=e.postComment,n=e.dishId;if(null!=a)return r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement("h4",null,"Comments"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(v.Stagger,{in:!0},a.map((function(e){return r.a.createElement(v.Fade,{in:!0},r.a.createElement("li",{key:e.id},r.a.createElement("p",null,e.comment),r.a.createElement("p",null,"-- ",e.author)))})))),r.a.createElement($,{dishId:n,postComment:t}))}var $=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(L.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(L.a)(n)),n}return Object(c.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){var e,a=this;return r.a.createElement("div",{className:"mt-3"},r.a.createElement(D.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil fa-lg"})," Submit Comment"),r.a.createElement(B.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(U.a,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(G.a,null,r.a.createElement(A.LocalForm,{onSubmit:function(e){return a.handleSubmit(e)}},r.a.createElement(S.a,{className:"form-group"},r.a.createElement(x.a,{htmlFor:"rating",md:12},"Rating"),r.a.createElement(F.a,{md:12},r.a.createElement(A.Control.select,{model:".rating",className:"form-control",name:"rating"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5")))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(x.a,{htmlFor:"author",md:12},"Your Name"),r.a.createElement(F.a,{md:12},r.a.createElement(A.Control.text,{model:".author",className:"form-control",id:"author",name:"author",placeholder:"Your Name",validators:{required:K,minLength:(e=3,function(a){return a&&a.length>=e}),maxLength:J(15)}}),r.a.createElement(A.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(x.a,{htmlFor:"comment",md:12},"Comment"),r.a.createElement(F.a,{md:12},r.a.createElement(A.Control.textarea,{model:".comment",className:"form-control",id:"comment",name:"comment",rows:"6"}))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(F.a,{md:{size:10,offset:2}},r.a.createElement(D.a,{type:"submit",color:"primary",onClick:this.toggleModal},"Submit")))))))}}]),t}(r.a.Component);function Q(e){var a=e.dish,t=e.comments,n=e.postComment,l=e.dishId;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(v.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{width:"100%",object:!0,src:b+a.image,alt:a.name}),r.a.createElement(h.a,null,r.a.createElement(E.a,null,a.name),r.a.createElement(p.a,null,a.description))))),r.a.createElement(Z,{comments:t,postComment:n,dishId:l}))}var V=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return this.props.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(g,null))):this.props.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,this.props.errMess))):null!=this.props.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(O.a,null,r.a.createElement(M.a,null,r.a.createElement(k.b,{to:"/home"},"Home")),r.a.createElement(M.a,null,r.a.createElement(k.b,{to:"/menu"},"Menu")),r.a.createElement(M.a,{active:!0},this.props.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,this.props.dish.name),r.a.createElement("hr",null))),r.a.createElement(Q,{dish:this.props.dish,comments:this.props.comments,postComment:this.props.postComment,dishId:this.props.dish.id})):r.a.createElement("div",null)}}]),t}(r.a.Component),X=t(169),ee=t(170),ae=t(171),te=t(172),ne=t(173),re=t(174),le=t(175),se=t(176),oe=t(177),ce=t(178),me=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(L.a)(n)),n.toggleModal=n.toggleModal.bind(Object(L.a)(n)),n.handleLogin=n.handleLogin.bind(Object(L.a)(n)),n}return Object(c.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(ee.a,{onClick:this.toggleNav}),r.a.createElement(ae.a,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",heigth:"30",width:"41",alt:"Ristorante con Fusion"})),r.a.createElement(te.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(ne.a,{navbar:!0},r.a.createElement(re.a,null,r.a.createElement(k.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(re.a,null,r.a.createElement(k.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),r.a.createElement(re.a,null,r.a.createElement(k.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(re.a,null,r.a.createElement(k.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))),r.a.createElement(ne.a,{className:"ml-auto",navbar:!0},r.a.createElement(re.a,null,r.a.createElement(D.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))))),r.a.createElement(le.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))),r.a.createElement(B.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(U.a,{toggle:this.toggleModal},"Login"),r.a.createElement(G.a,null,r.a.createElement(se.a,{onSubmit:this.handleLogin},r.a.createElement(oe.a,null,r.a.createElement(x.a,{htmlFor:"username"},"Username"),r.a.createElement(ce.a,{type:"text",id:"username",name:"username",innerRef:function(a){return e.username=a}})),r.a.createElement(oe.a,null,r.a.createElement(x.a,{htmlFor:"password"},"Password"),r.a.createElement(ce.a,{type:"password",id:"password",name:"password",innerRef:function(a){return e.password=a}})),r.a.createElement(oe.a,{check:!0},r.a.createElement(x.a,{check:!0},r.a.createElement(ce.a,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember me")),r.a.createElement(D.a,{type:"submit",value:"Submit",color:"primary"},"Login")))))}}]),t}(n.Component);var ie=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(k.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(k.b,{to:"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(k.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(k.b,{to:"/contactus"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},ue=t(11),de=t(25),he=function(){return{type:"DISHES_LOADING"}},Ee=function(e){return{type:"DISHES_FAILED",payload:e}},fe=function(e){return{type:"ADD_DISHES",payload:e}},pe=function(e){return{type:"COMMENTS_FAILED",payload:e}},ge=function(e){return{type:"ADD_COMMENTS",payload:e}},be=function(){return{type:"PROMOS_LOADING"}},ve=function(e){return{type:"PROMOS_FAILED",payload:e}},Ne=function(e){return{type:"ADD_PROMOS",payload:e}},ye=t(56),we=t(88),Oe=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(me,null),r.a.createElement(ye.a,null,r.a.createElement(we.a,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(ue.d,null,r.a.createElement(ue.b,{path:"/home",component:function(){return r.a.createElement(y,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promosLoading:e.props.promotions.isLoading,promosErrMess:e.props.promotions.errMess,leader:e.props.leaders.filter((function(e){return e.featured}))[0]})}}),r.a.createElement(ue.b,{exact:!0,path:"/menu",component:function(){return r.a.createElement(j,{dishes:e.props.dishes})}}),r.a.createElement(ue.b,{path:"/menu/:dishId",component:function(a){var t=a.match;return r.a.createElement(V,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(ue.b,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(q,{resetFeedbackForm:e.props.resetFeedbackForm})}}),r.a.createElement(ue.b,{exact:!0,path:"/aboutus",component:function(){return r.a.createElement(z,{leaders:e.props.leaders})}}),r.a.createElement(ue.a,{to:"/home"})))),r.a.createElement(ie,null))}}]),t}(r.a.Component),Me=Object(ue.g)(Object(de.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(a,t,n,r){return e(function(e,a,t,n){return function(r){var l={dishId:e,rating:a,author:t,comment:n,date:(new Date).toISOString()};return fetch(b+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(a,t,n,r))},fetchDishes:function(){e((function(e){return e(he(!0)),fetch(b+"dishes").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(fe(a))})).catch((function(a){return e(Ee(a.message))}))}))},resetFeedbackForm:function(){e(A.actions.reset("feedback"))},fetchComments:function(){e((function(e){return fetch(b+"comments").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(ge(a))})).catch((function(a){return e(pe(a.message))}))}))},fetchPromos:function(){e((function(e){return e(be(!0)),fetch(b+"promotions").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(Ne(a))})).catch((function(a){return e(ve(a.message))}))}))}}}))(Oe)),ke=(t(150),t(10)),Ce=t(26),je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_DISHES":return Object(ke.a)(Object(ke.a)({},e),{},{isLoading:!1,errMess:null,dishes:a.payload});case"DISHES_LOADING":return Object(ke.a)(Object(ke.a)({},e),{},{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object(ke.a)(Object(ke.a)({},e),{},{isLoading:!1,errMess:a.payload,dishes:[]});default:return e}},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENTS":return Object(ke.a)(Object(ke.a)({},e),{},{isLoading:!1,errMess:null,comments:a.payload});case"COMMENTS_FAILED":return Object(ke.a)(Object(ke.a)({},e),{},{isLoading:!1,errMess:a.payload,comments:[]});case"ADD_COMMENT":var t=a.payload;return Object(ke.a)(Object(ke.a)({},e),{},{comments:e.comments.concat(t)});default:return e}},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROMOS":return Object(ke.a)(Object(ke.a)({},e),{},{isLoading:!1,errMess:null,promotions:a.payload});case"PROMOS_LOADING":return Object(ke.a)(Object(ke.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(ke.a)(Object(ke.a)({},e),{},{isLoading:!1,errMess:a.payload,promotions:[]});default:return e}},xe=[{id:0,name:"Peter Pan",image:"/assets/images/alberto.png",designation:"Chief Epicurious Officer",abbr:"CEO",featured:!1,description:"Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."},{id:1,name:"Dhanasekaran Witherspoon",image:"/assets/images/alberto.png",designation:"Chief Food Officer",abbr:"CFO",featured:!1,description:"Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"},{id:2,name:"Agumbe Tang",image:"/assets/images/alberto.png",designation:"Chief Taste Officer",abbr:"CTO",featured:!1,description:"Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."},{id:3,name:"Alberto Somayya",image:"/assets/images/alberto.png",designation:"Executive Chef",abbr:"EC",featured:!0,description:"Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"}],Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,a=arguments.length>1?arguments[1]:void 0;return a.type,e},De=t(91),Ae=t(92),Ie=t.n(Ae),Te={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},He=Object(Ce.createStore)(Object(Ce.combineReducers)(Object(ke.a)({dishes:je,comments:Le,promotions:Se,leaders:Fe},Object(A.createForms)({feedback:Te}))),Object(Ce.applyMiddleware)(De.a,Ie.a)),Pe=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(de.Provider,{store:He},r.a.createElement(k.a,null,r.a.createElement("div",null,r.a.createElement(Me,null))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,a,t){e.exports=t(151)}},[[94,1,2]]]);
//# sourceMappingURL=main.cefe7ccd.chunk.js.map