document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll("img.lazy");let n;function t(){n&&clearTimeout(n),n=setTimeout(()=>{const n=window.pageYOffset;e.forEach(e=>{e.offsetTop<window.innerHeight+n&&(e.src=e.dataset.src,e.classList.remove("lazy"))}),0===e.length&&(document.removeEventListener("scroll",t),window.removeEventListener("resize",t),window.removeEventListener("orientationChange",t))},20)}document.addEventListener("scroll",t),window.addEventListener("resize",t),window.addEventListener("orientationChange",t)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eUxvYWRpbmcuanMiLCJzb3VyY2VzIjpbImxhenlMb2FkaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmxhenknKTtcclxuICBsZXQgbGF6eWxvYWRUaHJvdHRsZVRpbWVvdXQ7XHJcblxyXG4gIGZ1bmN0aW9uIGxhenlsb2FkKCkge1xyXG4gICAgaWYgKGxhenlsb2FkVGhyb3R0bGVUaW1lb3V0KSB7XHJcbiAgICAgIGNsZWFyVGltZW91dChsYXp5bG9hZFRocm90dGxlVGltZW91dCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGF6eWxvYWRUaHJvdHRsZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICBpbWFnZXMuZm9yRWFjaCgoaW1nKSA9PiB7XHJcbiAgICAgICAgaWYgKGltZy5vZmZzZXRUb3AgPCB3aW5kb3cuaW5uZXJIZWlnaHQgKyBzY3JvbGxUb3ApIHtcclxuICAgICAgICAgIGltZy5zcmMgPSBpbWcuZGF0YXNldC5zcmM7XHJcbiAgICAgICAgICBpbWcuY2xhc3NMaXN0LnJlbW92ZSgnbGF6eScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChpbWFnZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgbGF6eWxvYWQpO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBsYXp5bG9hZCk7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uQ2hhbmdlJywgbGF6eWxvYWQpO1xyXG4gICAgICB9XHJcbiAgICB9LCAyMCk7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBsYXp5bG9hZCk7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGxhenlsb2FkKTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25DaGFuZ2UnLCBsYXp5bG9hZCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaW1hZ2VzIiwicXVlcnlTZWxlY3RvckFsbCIsImxldCIsImxhenlsb2FkVGhyb3R0bGVUaW1lb3V0IiwibGF6eWxvYWQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwic2Nyb2xsVG9wIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJmb3JFYWNoIiwiaW1nIiwib2Zmc2V0VG9wIiwiaW5uZXJIZWlnaHQiLCJzcmMiLCJkYXRhc2V0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwibGVuZ3RoIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUFBLFNBQVNDLGlCQUFpQixtQkFBb0IsS0FDNUMsTUFBTUMsRUFBU0YsU0FBU0csaUJBQWlCLFlBQ3pDQyxJQUFJQyxFQUVKLFNBQVNDLElBQ0hELEdBQ0ZFLGFBQWFGLEdBR2ZBLEVBQTBCRyxXQUFXLEtBQ25DLE1BQU1DLEVBQVlDLE9BQU9DLFlBQ3pCVCxFQUFPVSxRQUFRLElBQ1RDLEVBQUlDLFVBQVlKLE9BQU9LLFlBQWNOLElBQ3ZDSSxFQUFJRyxJQUFNSCxFQUFJSSxRQUFRRCxJQUN0QkgsRUFBSUssVUFBVUMsT0FBTyxXQUdILElBQWxCakIsRUFBT2tCLFNBQ1RwQixTQUFTcUIsb0JBQW9CLFNBQVVmLEdBQ3ZDSSxPQUFPVyxvQkFBb0IsU0FBVWYsR0FDckNJLE9BQU9XLG9CQUFvQixvQkFBcUJmLEtBRWpELElBR0xOLFNBQVNDLGlCQUFpQixTQUFVSyxHQUNwQ0ksT0FBT1QsaUJBQWlCLFNBQVVLLEdBQ2xDSSxPQUFPVCxpQkFBaUIsb0JBQXFCSyJ9

let likes=document.querySelectorAll("section.likes li"),sect=document.querySelectorAll("section.section");likes&&(checklist=[],likes.forEach(e=>{e=e.outerText;checklist.push(e)}),console.log(checklist),console.log(sect),sect.forEach(e=>{console.log();var l=e.children[1].children[0].children[0].value;const c=e.children[1].children[0].children[0].children[0];1==checklist.includes(l)&&(c.style.fill="#519188")}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZXMuanMiLCJzb3VyY2VzIjpbImxpa2VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBsaWtlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uLmxpa2VzIGxpXCIpXHJcbmxldCBzZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb24uc2VjdGlvblwiKVxyXG5cclxuaWYgKGxpa2VzKSB7XHJcbiAgICBjaGVja2xpc3QgPSBbXVxyXG5cclxuICAgIGxpa2VzLmZvckVhY2gobGlrZSA9PiB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBsaWtlLm91dGVyVGV4dDtcclxuICAgICAgICBjaGVja2xpc3QucHVzaChpZClcclxuICAgIH0pXHJcblxyXG4gICAgY29uc29sZS5sb2coY2hlY2tsaXN0KVxyXG4gICAgY29uc29sZS5sb2coc2VjdClcclxuICAgIHNlY3QuZm9yRWFjaChzZWN0aW9uID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygpXHJcbiAgICAgICAgY29uc3QgYnV0dG9uVmFsdWUgPSBzZWN0aW9uLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLnZhbHVlXHJcbiAgICAgICAgY29uc3Qgc3ZnID0gc2VjdGlvbi5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZHJlblswXVxyXG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IGNoZWNrbGlzdC5pbmNsdWRlcyhidXR0b25WYWx1ZSlcclxuICAgICAgICBpZiAobWV0aG9kID09IHRydWUpIHtcclxuICAgICAgICAgICAgc3ZnLnN0eWxlLmZpbGwgPSBcIiM1MTkxODhcIlxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0iXSwibmFtZXMiOlsibGV0IiwibGlrZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZWN0IiwiY2hlY2tsaXN0IiwiZm9yRWFjaCIsImxpa2UiLCJpZCIsIm91dGVyVGV4dCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwic2VjdGlvbiIsImJ1dHRvblZhbHVlIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsInN2ZyIsImluY2x1ZGVzIiwic3R5bGUiLCJmaWxsIl0sIm1hcHBpbmdzIjoiQUFBQUEsSUFBSUMsTUFBUUMsU0FBU0MsaUJBQWlCLG9CQUNsQ0MsS0FBT0YsU0FBU0MsaUJBQWlCLG1CQUVqQ0YsUUFDQUksVUFBWSxHQUVaSixNQUFNSyxRQUFRQyxJQUNKQyxFQUFLRCxFQUFLRSxVQUNoQkosVUFBVUssS0FBS0YsS0FHbkJHLFFBQVFDLElBQUlQLFdBQ1pNLFFBQVFDLElBQUlSLE1BQ1pBLEtBQUtFLFFBQVFPLElBQ1RGLFFBQVFDLE1BQ1IsSUFBTUUsRUFBY0QsRUFBUUUsU0FBUyxHQUFHQSxTQUFTLEdBQUdBLFNBQVMsR0FBR0MsTUFDaEUsTUFBTUMsRUFBTUosRUFBUUUsU0FBUyxHQUFHQSxTQUFTLEdBQUdBLFNBQVMsR0FBR0EsU0FBUyxHQUVuRCxHQURDVixVQUFVYSxTQUFTSixLQUU5QkcsRUFBSUUsTUFBTUMsS0FBTyJ9

const img=document.querySelector(".img"),oldButton=document.querySelector("#old-person"),careButton=document.querySelector("#caregiver"),API_KEY="YWQxZDMwMmFlZTYwNGQwOWJjZWUxYTUwOTg2Mjg3ZmQ6MDI4NTVlNjItZTE4NC00YTNmLThjMDktOTBlZTY4MTg1NTY2",picture=document.getElementById("pictureUser");function selectPicture(){picture&&picture.addEventListener("change",e=>{0!==e.target.files.length&&(e=e.target.files[0],e=URL.createObjectURL(e),img.src=e)})}selectPicture();const regex=/^(?:NL-)?(\d{4})\s*([A-Z]{2})$/i,formElement=document.querySelector(".form"),errorMessage=document.querySelector(".pElement"),zipCode=document.querySelector("#zipcode"),houseNumber=document.querySelector("#houseNumber"),adressButton=document.querySelector(".adress"),city=document.querySelector(".city"),street=document.querySelector(".street"),zipCodeText=document.querySelector(".zipcode"),province=document.querySelector(".province"),cityInput=document.querySelector("#city"),streetInput=document.querySelector("#street"),zipCodeTextInput=document.querySelector("#zipcode"),provinceInput=document.querySelector("#province"),pictureInput=document.querySelector(".pictureInput"),latInput=document.querySelector("#lat"),lngInput=document.querySelector("#lng");function styleButton(){"/register"===window.location.pathname&&(oldButton.style.backgroundColor="#519188",oldButton.style.boxShadow="0px 0px 5px #519188",oldButton.style.fontWeight="bold",oldButton.classList.add("selected"),careButton.style.backgroundColor="white",careButton.style.boxShadow="none",careButton.style.fontWeight="normal"),"/register-zorg"===window.location.pathname&&(careButton.style.backgroundColor="#519188",careButton.style.boxShadow="0px 0px 5px #519188",careButton.style.fontWeight="bold",careButton.classList.add("selected"),oldButton.style.backgroundColor="white",oldButton.style.boxShadow="none",oldButton.style.fontWeight="normal")}formElement.addEventListener("submit",e=>{e.preventDefault(),regex.test(zipCode.value)||(errorMessage.textContent="De postcode is onjuist"),cityInput.value||(errorMessage.textContent="Genereer een adress"),pictureInput.value||(errorMessage.textContent="Vul een foto in"),cityInput.value&&pictureInput.value&&formElement.submit()}),adressButton.addEventListener("click",async()=>{zipCode.value&&houseNumber.value&&(zipCode.value.toUpperCase(),fetch(`https://api.myptv.com/geocoding/v1/locations/by-text?searchText=${zipCode.value}%20${houseNumber.value}&countryFilter=NL`,{method:"GET",headers:{apiKey:API_KEY}}).then(e=>e.json()).then(e=>{e=e.locations;"POSTAL_CODE"===e[0].locationType&&(errorMessage.textContent="Adress is onjuist"),"EXACT_ADDRESS"===e[0].locationType&&(city.textContent=e[0].address.city,street.textContent=e[0].address.street,zipCodeText.textContent=e[0].address.postalCode,province.textContent=e[0].address.state,cityInput.value=e[0].address.city,streetInput.value=e[0].address.street,zipCodeTextInput.value=e[0].address.postalCode,provinceInput.value=e[0].address.state,latInput.value=e[0].referencePosition.latitude,lngInput.value=e[0].referencePosition.longitude)}).catch(e=>{throw e}))}),styleButton();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuanMiLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWcnKTtcclxuY29uc3Qgb2xkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29sZC1wZXJzb24nKTtcclxuY29uc3QgY2FyZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJlZ2l2ZXInKTtcclxuY29uc3QgQVBJX0tFWSA9XHJcbiAgJ1lXUXhaRE13TW1GbFpUWXdOR1F3T1dKalpXVXhZVFV3T1RnMk1qZzNabVE2TURJNE5UVmxOakl0WlRFNE5DMDBZVE5tTFRoak1Ea3RPVEJsWlRZNE1UZzFOVFkyJztcclxuY29uc3QgcGljdHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWN0dXJlVXNlcicpO1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0UGljdHVyZSgpIHtcclxuICBpZiAocGljdHVyZSkge1xyXG4gICAgcGljdHVyZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBjb25zdCBpbWdGaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgIGNvbnN0IGltZ1NyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoaW1nRmlsZSk7XHJcbiAgICAgICAgaW1nLnNyYyA9IGltZ1NyYztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5zZWxlY3RQaWN0dXJlKCk7XHJcblxyXG5jb25zdCByZWdleCA9IC9eKD86TkwtKT8oXFxkezR9KVxccyooW0EtWl17Mn0pJC9pO1xyXG5jb25zdCBmb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XHJcbmNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wRWxlbWVudCcpO1xyXG5jb25zdCB6aXBDb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ppcGNvZGUnKTtcclxuY29uc3QgaG91c2VOdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG91c2VOdW1iZXInKTtcclxuXHJcbmNvbnN0IGFkcmVzc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZHJlc3MnKTtcclxuY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5Jyk7XHJcbmNvbnN0IHN0cmVldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHJlZXQnKTtcclxuY29uc3QgemlwQ29kZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuemlwY29kZScpO1xyXG5jb25zdCBwcm92aW5jZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm92aW5jZScpO1xyXG5cclxuY29uc3QgY2l0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKTtcclxuY29uc3Qgc3RyZWV0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RyZWV0Jyk7XHJcbmNvbnN0IHppcENvZGVUZXh0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjemlwY29kZScpO1xyXG5jb25zdCBwcm92aW5jZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb3ZpbmNlJyk7XHJcbmNvbnN0IHBpY3R1cmVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waWN0dXJlSW5wdXQnKTtcclxuY29uc3QgbGF0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGF0Jyk7XHJcbmNvbnN0IGxuZ0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xuZycpO1xyXG5cclxuZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBpZiAoIXJlZ2V4LnRlc3QoemlwQ29kZS52YWx1ZSkpIHtcclxuICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9ICdEZSBwb3N0Y29kZSBpcyBvbmp1aXN0JztcclxuICB9XHJcbiAgaWYgKCFjaXR5SW5wdXQudmFsdWUpIHtcclxuICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9ICdHZW5lcmVlciBlZW4gYWRyZXNzJztcclxuICB9XHJcbiAgaWYgKCFwaWN0dXJlSW5wdXQudmFsdWUpIHtcclxuICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9ICdWdWwgZWVuIGZvdG8gaW4nO1xyXG4gIH1cclxuICBpZiAoY2l0eUlucHV0LnZhbHVlICYmIHBpY3R1cmVJbnB1dC52YWx1ZSkge1xyXG4gICAgZm9ybUVsZW1lbnQuc3VibWl0KCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmFkcmVzc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICBpZiAoemlwQ29kZS52YWx1ZSAmJiBob3VzZU51bWJlci52YWx1ZSkge1xyXG4gICAgemlwQ29kZS52YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS5teXB0di5jb20vZ2VvY29kaW5nL3YxL2xvY2F0aW9ucy9ieS10ZXh0P3NlYXJjaFRleHQ9JHt6aXBDb2RlLnZhbHVlfSUyMCR7aG91c2VOdW1iZXIudmFsdWV9JmNvdW50cnlGaWx0ZXI9TkxgLFxyXG4gICAgICB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7IGFwaUtleTogQVBJX0tFWSB9LFxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoYXBpRGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhcGlEYXRhLmxvY2F0aW9ucztcclxuICAgICAgICBpZiAoZGF0YVswXS5sb2NhdGlvblR5cGUgPT09ICdQT1NUQUxfQ09ERScpIHtcclxuICAgICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9ICdBZHJlc3MgaXMgb25qdWlzdCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhWzBdLmxvY2F0aW9uVHlwZSA9PT0gJ0VYQUNUX0FERFJFU1MnKSB7XHJcbiAgICAgICAgICBjaXR5LnRleHRDb250ZW50ID0gZGF0YVswXS5hZGRyZXNzLmNpdHk7XHJcbiAgICAgICAgICBzdHJlZXQudGV4dENvbnRlbnQgPSBkYXRhWzBdLmFkZHJlc3Muc3RyZWV0O1xyXG4gICAgICAgICAgemlwQ29kZVRleHQudGV4dENvbnRlbnQgPSBkYXRhWzBdLmFkZHJlc3MucG9zdGFsQ29kZTtcclxuICAgICAgICAgIHByb3ZpbmNlLnRleHRDb250ZW50ID0gZGF0YVswXS5hZGRyZXNzLnN0YXRlO1xyXG5cclxuICAgICAgICAgIGNpdHlJbnB1dC52YWx1ZSA9IGRhdGFbMF0uYWRkcmVzcy5jaXR5O1xyXG4gICAgICAgICAgc3RyZWV0SW5wdXQudmFsdWUgPSBkYXRhWzBdLmFkZHJlc3Muc3RyZWV0O1xyXG4gICAgICAgICAgemlwQ29kZVRleHRJbnB1dC52YWx1ZSA9IGRhdGFbMF0uYWRkcmVzcy5wb3N0YWxDb2RlO1xyXG4gICAgICAgICAgcHJvdmluY2VJbnB1dC52YWx1ZSA9IGRhdGFbMF0uYWRkcmVzcy5zdGF0ZTtcclxuICAgICAgICAgIGxhdElucHV0LnZhbHVlID0gZGF0YVswXS5yZWZlcmVuY2VQb3NpdGlvbi5sYXRpdHVkZTtcclxuICAgICAgICAgIGxuZ0lucHV0LnZhbHVlID0gZGF0YVswXS5yZWZlcmVuY2VQb3NpdGlvbi5sb25naXR1ZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiBzdHlsZUJ1dHRvbigpIHtcclxuICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSAnL3JlZ2lzdGVyJykge1xyXG4gICAgb2xkQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNTE5MTg4JztcclxuICAgIG9sZEJ1dHRvbi5zdHlsZS5ib3hTaGFkb3cgPSAnMHB4IDBweCA1cHggIzUxOTE4OCc7XHJcbiAgICBvbGRCdXR0b24uc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcclxuICAgIG9sZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG5cclxuICAgIGNhcmVCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcclxuICAgIGNhcmVCdXR0b24uc3R5bGUuYm94U2hhZG93ID0gJ25vbmUnO1xyXG4gICAgY2FyZUJ1dHRvbi5zdHlsZS5mb250V2VpZ2h0ID0gJ25vcm1hbCc7XHJcbiAgfVxyXG4gIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09ICcvcmVnaXN0ZXItem9yZycpIHtcclxuICAgIGNhcmVCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM1MTkxODgnO1xyXG4gICAgY2FyZUJ1dHRvbi5zdHlsZS5ib3hTaGFkb3cgPSAnMHB4IDBweCA1cHggIzUxOTE4OCc7XHJcbiAgICBjYXJlQnV0dG9uLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XHJcbiAgICBjYXJlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcblxyXG4gICAgb2xkQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XHJcbiAgICBvbGRCdXR0b24uc3R5bGUuYm94U2hhZG93ID0gJ25vbmUnO1xyXG4gICAgb2xkQnV0dG9uLnN0eWxlLmZvbnRXZWlnaHQgPSAnbm9ybWFsJztcclxuICB9XHJcbn1cclxuXHJcbnN0eWxlQnV0dG9uKCk7XHJcbiJdLCJuYW1lcyI6WyJpbWciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvbGRCdXR0b24iLCJjYXJlQnV0dG9uIiwiQVBJX0tFWSIsInBpY3R1cmUiLCJnZXRFbGVtZW50QnlJZCIsInNlbGVjdFBpY3R1cmUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsImltZ0ZpbGUiLCJpbWdTcmMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJzcmMiLCJyZWdleCIsImZvcm1FbGVtZW50IiwiZXJyb3JNZXNzYWdlIiwiemlwQ29kZSIsImhvdXNlTnVtYmVyIiwiYWRyZXNzQnV0dG9uIiwiY2l0eSIsInN0cmVldCIsInppcENvZGVUZXh0IiwicHJvdmluY2UiLCJjaXR5SW5wdXQiLCJzdHJlZXRJbnB1dCIsInppcENvZGVUZXh0SW5wdXQiLCJwcm92aW5jZUlucHV0IiwicGljdHVyZUlucHV0IiwibGF0SW5wdXQiLCJsbmdJbnB1dCIsInN0eWxlQnV0dG9uIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2hhZG93IiwiZm9udFdlaWdodCIsImNsYXNzTGlzdCIsImFkZCIsInByZXZlbnREZWZhdWx0IiwidGVzdCIsInZhbHVlIiwidGV4dENvbnRlbnQiLCJzdWJtaXQiLCJhc3luYyIsInRvVXBwZXJDYXNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYXBpS2V5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJhcGlEYXRhIiwibG9jYXRpb25zIiwibG9jYXRpb25UeXBlIiwiYWRkcmVzcyIsInBvc3RhbENvZGUiLCJzdGF0ZSIsInJlZmVyZW5jZVBvc2l0aW9uIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJjYXRjaCIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxJQUFNQyxTQUFTQyxjQUFjLFFBQzdCQyxVQUFZRixTQUFT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

const latData=document.querySelector("#lat").value,latNumber=parseFloat(latData),lngData=document.querySelector("#lng").value,lngNumber=parseFloat(lngData);function initMap(){var a={lat:latNumber,lng:lngNumber},e=new google.maps.Map(document.getElementById("map"),{zoom:14,center:a});new google.maps.Marker({position:a,map:e})}window.initMap=initMap;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWxzLmpzIiwic291cmNlcyI6WyJ1c2VyLWRldGFpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbGF0RGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYXQnKS52YWx1ZTtcclxuY29uc3QgbGF0TnVtYmVyID0gcGFyc2VGbG9hdChsYXREYXRhKTtcclxuY29uc3QgbG5nRGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsbmcnKS52YWx1ZTtcclxuY29uc3QgbG5nTnVtYmVyID0gcGFyc2VGbG9hdChsbmdEYXRhKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRNYXAoKSB7XHJcbiAgLy8gVGhlIGxvY2F0aW9uIG9mIFVsdXJ1XHJcbiAgY29uc3QgcG9zaXRpb24gPSB7XHJcbiAgICBsYXQ6IGxhdE51bWJlcixcclxuICAgIGxuZzogbG5nTnVtYmVyLFxyXG4gIH07XHJcbiAgLy8gVGhlIG1hcCwgY2VudGVyZWQgYXQgVWx1cnVcclxuICBjb25zdCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xyXG4gICAgem9vbTogMTQsXHJcbiAgICBjZW50ZXI6IHBvc2l0aW9uLFxyXG4gIH0pO1xyXG4gIC8vIFRoZSBtYXJrZXIsIHBvc2l0aW9uZWQgYXQgVWx1cnVcclxuICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgIHBvc2l0aW9uLFxyXG4gICAgbWFwLFxyXG4gIH0pO1xyXG59XHJcbndpbmRvdy5pbml0TWFwID0gaW5pdE1hcDtcclxuIl0sIm5hbWVzIjpbImxhdERhdGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImxhdE51bWJlciIsInBhcnNlRmxvYXQiLCJsbmdEYXRhIiwibG5nTnVtYmVyIiwiaW5pdE1hcCIsInBvc2l0aW9uIiwibGF0IiwibG5nIiwibWFwIiwiZ29vZ2xlIiwibWFwcyIsIk1hcCIsImdldEVsZW1lbnRCeUlkIiwiem9vbSIsImNlbnRlciIsIk1hcmtlciIsIndpbmRvdyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsUUFBVUMsU0FBU0MsY0FBYyxRQUFRQyxNQUN6Q0MsVUFBWUMsV0FBV0wsU0FDdkJNLFFBQVVMLFNBQVNDLGNBQWMsUUFBUUMsTUFDekNJLFVBQVlGLFdBQVdDLFNBRTdCLFNBQVNFLFVBRVAsSUFBTUMsRUFBVyxDQUNmQyxJQUFLTixVQUNMTyxJQUFLSixXQUdESyxFQUFNLElBQUlDLE9BQU9DLEtBQUtDLElBQUlkLFNBQVNlLGVBQWUsT0FBUSxDQUM5REMsS0FBTSxHQUNOQyxPQUFRVCxJQUdLLElBQUlJLE9BQU9DLEtBQUtLLE9BQU8sQ0FDcENWLFNBQUFBLEVBQ0FHLElBQUFBLElBR0pRLE9BQU9aLFFBQVVBIn0=

const nextButton=document.querySelector(".next"),prevButton=document.querySelector(".previous"),carouselWrapper=document.querySelector(".x-overflow"),carouselItem=document.querySelector(".section");carouselWrapper.style.overflowX="hidden",nextButton.addEventListener("click",()=>{carouselWrapper.scrollLeft+=carouselItem.clientWidth}),prevButton.addEventListener("click",()=>{carouselWrapper.scrollLeft-=carouselItem.clientWidth});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VzIjpbInVzZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dCcpO1xyXG5jb25zdCBwcmV2QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXZpb3VzJyk7XHJcbmNvbnN0IGNhcm91c2VsV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy54LW92ZXJmbG93Jyk7XHJcbmNvbnN0IGNhcm91c2VsSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uJyk7XHJcblxyXG5jYXJvdXNlbFdyYXBwZXIuc3R5bGUub3ZlcmZsb3dYID0gJ2hpZGRlbic7XHJcblxyXG5uZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNhcm91c2VsV3JhcHBlci5zY3JvbGxMZWZ0ICs9IGNhcm91c2VsSXRlbS5jbGllbnRXaWR0aDtcclxufSk7XHJcblxyXG5wcmV2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNhcm91c2VsV3JhcHBlci5zY3JvbGxMZWZ0IC09IGNhcm91c2VsSXRlbS5jbGllbnRXaWR0aDtcclxufSk7Il0sIm5hbWVzIjpbIm5leHRCdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwcmV2QnV0dG9uIiwiY2Fyb3VzZWxXcmFwcGVyIiwiY2Fyb3VzZWxJdGVtIiwic3R5bGUiLCJvdmVyZmxvd1giLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsTGVmdCIsImNsaWVudFdpZHRoIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxXQUFhQyxTQUFTQyxjQUFjLFNBQ3BDQyxXQUFhRixTQUFTQyxjQUFjLGFBQ3BDRSxnQkFBa0JILFNBQVNDLGNBQWMsZUFDekNHLGFBQWVKLFNBQVNDLGNBQWMsWUFFNUNFLGdCQUFnQkUsTUFBTUMsVUFBWSxTQUVsQ1AsV0FBV1EsaUJBQWlCLFFBQVMsS0FDbkNKLGdCQUFnQkssWUFBY0osYUFBYUssY0FHN0NQLFdBQVdLLGlCQUFpQixRQUFTLEtBQ25DSixnQkFBZ0JLLFlBQWNKLGFBQWFLIn0=
