(this["webpackJsonpoyamli-editor"]=this["webpackJsonpoyamli-editor"]||[]).push([[0],{10:function(e,t,r){},46:function(e,t,r){},66:function(e,t,r){"use strict";r.r(t);var c=r(3),a=r(0),n=r.n(a),o=r(6),s=r.n(o),i=(r(46),r(10),function(e){var t=document.createElement("script");t.src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",document.body.appendChild(t),t.onload=function(){e&&e()},e&&e()}),u=(r(47),r(11)),l=r(9),d=r(7),j=function(e){var t=e.src,r=e.transmitPlayerRef;return Object(c.jsx)(d.b,{src:t,className:"audioplayer",onPause:function(e){e.target.currentTime=e.target.currentTime-1},ref:function(e){r(e)},autoPlayAfterSrcChange:!1,customProgressBarSection:[d.a.MAIN_CONTROLS,d.a.CURRENT_TIME,d.a.PROGRESS_BAR,d.a.DURATION],customControlsSection:[],customAdditionalControls:[],progressJumpSteps:{backward:2e3,forward:2e3}})},m=r(39),b=r(40),p=r.n(b),f=function(){return Object(c.jsx)(m.CKEditor,{editor:p.a,data:"<p>Hello from CKEditor 5!</p>",onReady:function(e){console.log("Editor is ready to use!",e)},onChange:function(e,t){var r=t.getData();console.log({event:e,editor:t,data:r})},onBlur:function(e,t){console.log("Blur.",t)},onFocus:function(e,t){console.log("Focus.",t)}})};var O=function(){var e,t,r=Object(a.useState)(),n=Object(l.a)(r,2),o=n[0],s=n[1],i=Object(a.useState)(),d=Object(l.a)(i,2),m=d[0],b=d[1],p=Object(a.useState)(!0),O=Object(l.a)(p,2),h=O[0],v=O[1],g=Object(a.useState)(""),x=Object(l.a)(g,2),y=x[0],N=x[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{tabIndex:"0",className:"App",onKeyDown:function(t){o&&("Escape"===t.code?e.audio.current.paused?e.audio.current.play():(e.audio.current.pause(),e.audio.current.currentTime=e.audio.current.currentTime-1):"F1"===t.code?e.audio.current.currentTime=e.audio.current.currentTime-2:"F2"===t.code&&(e.audio.current.currentTime=e.audio.current.currentTime+2))},children:[Object(c.jsxs)("div",{className:"audio_container",children:[Object(c.jsx)("input",{className:"input",id:"audio_file",type:"file",accept:".mp3, .m4a, .flac, .mp4, .wav, .wma, .aac",onChange:function(e){if(e.target.files&&e.target.files.length>0){N(""),v(!0);var t=e.target.files[0];s(t),b(URL.createObjectURL(t))}},ref:function(e){t=e}}),Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{className:"urllabel",children:"or enter Youtube video URL"}),Object(c.jsx)("input",{className:"input",id:"audio_url",type:"text",value:y,onKeyDown:function(e){if(("Enter"===e.code||"NumpadEnter"===e.code)&&""!==y){var r=e.target.value;r.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\\&v=|\?v=)([^#\\&\\?]*).*/)?(v(!1),N(r.replace("watch?v=","embed/")),t.value="",t.file=""):u.b.error("Invalid youtube URL")}},onChange:function(e){N(e.target.value)}})]}),h?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j,{src:m,transmitPlayerRef:function(t){e=t}}),o&&Object(c.jsxs)("div",{className:"shortcuts",children:[Object(c.jsx)("div",{className:"rewindshortcut",children:"F1"}),Object(c.jsx)("div",{className:"playshortcut",children:"Esc"}),Object(c.jsx)("div",{className:"forwardshortcut",children:"F2"})]})]}):Object(c.jsx)("div",{className:"player-wrapper",children:Object(c.jsx)("iframe",{className:"react-player",id:"player",title:"url-player",type:"text/html",src:y,frameBorder:"0"})})]}),Object(c.jsx)(f,{})]})})};r(65);var h=function(){return Object(a.useEffect)((function(){i((function(){}))})),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O,{}),Object(c.jsx)(u.a,{position:"top-center",autoClose:5e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,draggable:!0,pauseOnHover:!0})]})};s.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.32f7422e.chunk.js.map