!function(){function e(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}var n=document.querySelector(".form");n.addEventListener("submit",(function(t){t.preventDefault();for(var o=parseInt(n.elements.delay.value),a=parseInt(n.elements.step.value),i=parseInt(n.elements.amount.value),c=1;c<=i;c++)e(c,o+(c-1)*a).then((function(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}))}();
//# sourceMappingURL=03-promises.732d3273.js.map
