function t(t){const{positionType:n}=t;return"anchor"===n?function(t){const{positionElement:n}=t,{offsetTop:o}=n,{height:e}=n.getBoundingClientRect();return o+e}(t):"over"===n?function(t){const{positionElement:n,floatingElement:o}=t,{offsetTop:e}=n,{offsetHeight:i}=o;return e-i/2}(t):function(t){const{positionElement:n}=t,{offsetTop:o}=n;return o}(t)}export{t as g};