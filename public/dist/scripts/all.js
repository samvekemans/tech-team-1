document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll("img.lazy");let n;function t(){n&&clearTimeout(n),n=setTimeout(()=>{const n=window.pageYOffset;e.forEach(e=>{e.offsetTop<window.innerHeight+n&&(e.src=e.dataset.src,e.classList.remove("lazy"))}),0===e.length&&(document.removeEventListener("scroll",t),window.removeEventListener("resize",t),window.removeEventListener("orientationChange",t))},20)}document.addEventListener("scroll",t),window.addEventListener("resize",t),window.addEventListener("orientationChange",t)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eUxvYWRpbmcuanMiLCJzb3VyY2VzIjpbImxhenlMb2FkaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZy5sYXp5Jyk7XG4gIGxldCBsYXp5bG9hZFRocm90dGxlVGltZW91dDtcblxuICBmdW5jdGlvbiBsYXp5bG9hZCgpIHtcbiAgICBpZiAobGF6eWxvYWRUaHJvdHRsZVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dChsYXp5bG9hZFRocm90dGxlVGltZW91dCk7XG4gICAgfVxuXG4gICAgbGF6eWxvYWRUaHJvdHRsZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgIGltYWdlcy5mb3JFYWNoKChpbWcpID0+IHtcbiAgICAgICAgaWYgKGltZy5vZmZzZXRUb3AgPCB3aW5kb3cuaW5uZXJIZWlnaHQgKyBzY3JvbGxUb3ApIHtcbiAgICAgICAgICBpbWcuc3JjID0gaW1nLmRhdGFzZXQuc3JjO1xuICAgICAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKCdsYXp5Jyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKGltYWdlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgbGF6eWxvYWQpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgbGF6eWxvYWQpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25DaGFuZ2UnLCBsYXp5bG9hZCk7XG4gICAgICB9XG4gICAgfSwgMjApO1xuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgbGF6eWxvYWQpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgbGF6eWxvYWQpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25DaGFuZ2UnLCBsYXp5bG9hZCk7XG59KTtcbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbWFnZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGV0IiwibGF6eWxvYWRUaHJvdHRsZVRpbWVvdXQiLCJsYXp5bG9hZCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJzY3JvbGxUb3AiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImZvckVhY2giLCJpbWciLCJvZmZzZXRUb3AiLCJpbm5lckhlaWdodCIsInNyYyIsImRhdGFzZXQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJsZW5ndGgiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQUEsU0FBU0MsaUJBQWlCLG1CQUFvQixLQUM1QyxNQUFNQyxFQUFTRixTQUFTRyxpQkFBaUIsWUFDekNDLElBQUlDLEVBRUosU0FBU0MsSUFDSEQsR0FDRkUsYUFBYUYsR0FHZkEsRUFBMEJHLFdBQVcsS0FDbkMsTUFBTUMsRUFBWUMsT0FBT0MsWUFDekJULEVBQU9VLFFBQVEsSUFDVEMsRUFBSUMsVUFBWUosT0FBT0ssWUFBY04sSUFDdkNJLEVBQUlHLElBQU1ILEVBQUlJLFFBQVFELElBQ3RCSCxFQUFJSyxVQUFVQyxPQUFPLFdBR0gsSUFBbEJqQixFQUFPa0IsU0FDVHBCLFNBQVNxQixvQkFBb0IsU0FBVWYsR0FDdkNJLE9BQU9XLG9CQUFvQixTQUFVZixHQUNyQ0ksT0FBT1csb0JBQW9CLG9CQUFxQmYsS0FFakQsSUFHTE4sU0FBU0MsaUJBQWlCLFNBQVVLLEdBQ3BDSSxPQUFPVCxpQkFBaUIsU0FBVUssR0FDbENJLE9BQU9ULGlCQUFpQixvQkFBcUJLIn0=

let likes=document.querySelectorAll("section.likes li"),sect=document.querySelectorAll("section.section");likes&&(checklist=[],likes.forEach(e=>{e=e.outerText;checklist.push(e)}),console.log(checklist),console.log(sect),sect.forEach(e=>{console.log();var l=e.children[1].children[0].children[0].value;const c=e.children[1].children[0].children[0].children[0];1==checklist.includes(l)&&(c.style.fill="#519188")}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZXMuanMiLCJzb3VyY2VzIjpbImxpa2VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBsaWtlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uLmxpa2VzIGxpXCIpXG5sZXQgc2VjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uLnNlY3Rpb25cIilcblxuaWYgKGxpa2VzKSB7XG4gICAgY2hlY2tsaXN0ID0gW11cblxuICAgIGxpa2VzLmZvckVhY2gobGlrZSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gbGlrZS5vdXRlclRleHQ7XG4gICAgICAgIGNoZWNrbGlzdC5wdXNoKGlkKVxuICAgIH0pXG5cbiAgICBjb25zb2xlLmxvZyhjaGVja2xpc3QpXG4gICAgY29uc29sZS5sb2coc2VjdClcbiAgICBzZWN0LmZvckVhY2goc2VjdGlvbiA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKClcbiAgICAgICAgY29uc3QgYnV0dG9uVmFsdWUgPSBzZWN0aW9uLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLnZhbHVlXG4gICAgICAgIGNvbnN0IHN2ZyA9IHNlY3Rpb24uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF1cbiAgICAgICAgY29uc3QgbWV0aG9kID0gY2hlY2tsaXN0LmluY2x1ZGVzKGJ1dHRvblZhbHVlKVxuICAgICAgICBpZiAobWV0aG9kID09IHRydWUpIHtcbiAgICAgICAgICAgIHN2Zy5zdHlsZS5maWxsID0gXCIjNTE5MTg4XCJcbiAgICAgICAgfVxuICAgIH0pXG59Il0sIm5hbWVzIjpbImxldCIsImxpa2VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2VjdCIsImNoZWNrbGlzdCIsImZvckVhY2giLCJsaWtlIiwiaWQiLCJvdXRlclRleHQiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInNlY3Rpb24iLCJidXR0b25WYWx1ZSIsImNoaWxkcmVuIiwidmFsdWUiLCJzdmciLCJpbmNsdWRlcyIsInN0eWxlIiwiZmlsbCJdLCJtYXBwaW5ncyI6IkFBQUFBLElBQUlDLE1BQVFDLFNBQVNDLGlCQUFpQixvQkFDbENDLEtBQU9GLFNBQVNDLGlCQUFpQixtQkFFakNGLFFBQ0FJLFVBQVksR0FFWkosTUFBTUssUUFBUUMsSUFDSkMsRUFBS0QsRUFBS0UsVUFDaEJKLFVBQVVLLEtBQUtGLEtBR25CRyxRQUFRQyxJQUFJUCxXQUNaTSxRQUFRQyxJQUFJUixNQUNaQSxLQUFLRSxRQUFRTyxJQUNURixRQUFRQyxNQUNSLElBQU1FLEVBQWNELEVBQVFFLFNBQVMsR0FBR0EsU0FBUyxHQUFHQSxTQUFTLEdBQUdDLE1BQ2hFLE1BQU1DLEVBQU1KLEVBQVFFLFNBQVMsR0FBR0EsU0FBUyxHQUFHQSxTQUFTLEdBQUdBLFNBQVMsR0FFbkQsR0FEQ1YsVUFBVWEsU0FBU0osS0FFOUJHLEVBQUlFLE1BQU1DLEtBQU8ifQ==

const img=document.querySelector(".img"),oldButton=document.querySelector("#old-person"),careButton=document.querySelector("#caregiver"),API_KEY="YWQxZDMwMmFlZTYwNGQwOWJjZWUxYTUwOTg2Mjg3ZmQ6MDI4NTVlNjItZTE4NC00YTNmLThjMDktOTBlZTY4MTg1NTY2",picture=document.getElementById("pictureUser");function selectPicture(){picture&&picture.addEventListener("change",e=>{0!==e.target.files.length&&(e=e.target.files[0],e=URL.createObjectURL(e),img.src=e)})}selectPicture();const regex=/^(?:NL-)?(\d{4})\s*([A-Z]{2})$/i,formElement=document.querySelector(".form"),errorMessage=document.querySelector(".pElement"),zipCode=document.querySelector("#zipcode"),houseNumber=document.querySelector("#houseNumber"),adressButton=document.querySelector(".adress"),city=document.querySelector(".city"),street=document.querySelector(".street"),zipCodeText=document.querySelector(".zipcode"),province=document.querySelector(".province"),cityInput=document.querySelector("#city"),streetInput=document.querySelector("#street"),zipCodeTextInput=document.querySelector("#zipcode"),provinceInput=document.querySelector("#province"),pictureInput=document.querySelector(".pictureInput"),latInput=document.querySelector("#lat"),lngInput=document.querySelector("#lng");function styleButton(){"/register"===window.location.pathname&&(oldButton.style.backgroundColor="#519188",oldButton.style.boxShadow="0px 0px 5px #519188",oldButton.style.fontWeight="bold",oldButton.classList.add("selected"),careButton.style.backgroundColor="white",careButton.style.boxShadow="none",careButton.style.fontWeight="normal"),"/register-zorg"===window.location.pathname&&(careButton.style.backgroundColor="#519188",careButton.style.boxShadow="0px 0px 5px #519188",careButton.style.fontWeight="bold",careButton.classList.add("selected"),oldButton.style.backgroundColor="white",oldButton.style.boxShadow="none",oldButton.style.fontWeight="normal")}formElement.addEventListener("submit",e=>{e.preventDefault(),regex.test(zipCode.value)||(errorMessage.textContent="De postcode is onjuist"),cityInput.value||(errorMessage.textContent="Genereer een adress"),pictureInput.value||(errorMessage.textContent="Vul een foto in"),cityInput.value&&pictureInput.value&&formElement.submit()}),adressButton.addEventListener("click",async()=>{zipCode.value&&houseNumber.value&&(zipCode.value.toUpperCase(),fetch(`https://api.myptv.com/geocoding/v1/locations/by-text?searchText=${zipCode.value}%20${houseNumber.value}&countryFilter=NL`,{method:"GET",headers:{apiKey:API_KEY}}).then(e=>e.json()).then(e=>{e=e.locations;"POSTAL_CODE"===e[0].locationType&&(errorMessage.textContent="Adress is onjuist"),"EXACT_ADDRESS"===e[0].locationType&&(city.textContent=e[0].address.city,street.textContent=e[0].address.street,zipCodeText.textContent=e[0].address.postalCode,province.textContent=e[0].address.state,cityInput.value=e[0].address.city,streetInput.value=e[0].address.street,zipCodeTextInput.value=e[0].address.postalCode,provinceInput.value=e[0].address.state,latInput.value=e[0].referencePosition.latitude,lngInput.value=e[0].referencePosition.longitude)}).catch(e=>{throw e}))}),styleButton();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuanMiLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWcnKTtcbmNvbnN0IG9sZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvbGQtcGVyc29uJyk7XG5jb25zdCBjYXJlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcmVnaXZlcicpO1xuY29uc3QgQVBJX0tFWSA9XG4gICdZV1F4WkRNd01tRmxaVFl3TkdRd09XSmpaV1V4WVRVd09UZzJNamczWm1RNk1ESTROVFZsTmpJdFpURTROQzAwWVRObUxUaGpNRGt0T1RCbFpUWTRNVGcxTlRZMic7XG5jb25zdCBwaWN0dXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpY3R1cmVVc2VyJyk7XG5cbmZ1bmN0aW9uIHNlbGVjdFBpY3R1cmUoKSB7XG4gIGlmIChwaWN0dXJlKSB7XG4gICAgcGljdHVyZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuZmlsZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IGltZ0ZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgIGNvbnN0IGltZ1NyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoaW1nRmlsZSk7XG4gICAgICAgIGltZy5zcmMgPSBpbWdTcmM7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuc2VsZWN0UGljdHVyZSgpO1xuXG5jb25zdCByZWdleCA9IC9eKD86TkwtKT8oXFxkezR9KVxccyooW0EtWl17Mn0pJC9pO1xuY29uc3QgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBFbGVtZW50Jyk7XG5jb25zdCB6aXBDb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ppcGNvZGUnKTtcbmNvbnN0IGhvdXNlTnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvdXNlTnVtYmVyJyk7XG5cbmNvbnN0IGFkcmVzc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZHJlc3MnKTtcbmNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eScpO1xuY29uc3Qgc3RyZWV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0cmVldCcpO1xuY29uc3QgemlwQ29kZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuemlwY29kZScpO1xuY29uc3QgcHJvdmluY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvdmluY2UnKTtcblxuY29uc3QgY2l0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKTtcbmNvbnN0IHN0cmVldElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0cmVldCcpO1xuY29uc3QgemlwQ29kZVRleHRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN6aXBjb2RlJyk7XG5jb25zdCBwcm92aW5jZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb3ZpbmNlJyk7XG5jb25zdCBwaWN0dXJlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGljdHVyZUlucHV0Jyk7XG5jb25zdCBsYXRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYXQnKTtcbmNvbnN0IGxuZ0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xuZycpO1xuXG5mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKCFyZWdleC50ZXN0KHppcENvZGUudmFsdWUpKSB7XG4gICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gJ0RlIHBvc3Rjb2RlIGlzIG9uanVpc3QnO1xuICB9XG4gIGlmICghY2l0eUlucHV0LnZhbHVlKSB7XG4gICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gJ0dlbmVyZWVyIGVlbiBhZHJlc3MnO1xuICB9XG4gIGlmICghcGljdHVyZUlucHV0LnZhbHVlKSB7XG4gICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gJ1Z1bCBlZW4gZm90byBpbic7XG4gIH1cbiAgaWYgKGNpdHlJbnB1dC52YWx1ZSAmJiBwaWN0dXJlSW5wdXQudmFsdWUpIHtcbiAgICBmb3JtRWxlbWVudC5zdWJtaXQoKTtcbiAgfVxufSk7XG5cbmFkcmVzc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgaWYgKHppcENvZGUudmFsdWUgJiYgaG91c2VOdW1iZXIudmFsdWUpIHtcbiAgICB6aXBDb2RlLnZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkubXlwdHYuY29tL2dlb2NvZGluZy92MS9sb2NhdGlvbnMvYnktdGV4dD9zZWFyY2hUZXh0PSR7emlwQ29kZS52YWx1ZX0lMjAke2hvdXNlTnVtYmVyLnZhbHVlfSZjb3VudHJ5RmlsdGVyPU5MYCxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczogeyBhcGlLZXk6IEFQSV9LRVkgfSxcbiAgICAgIH1cbiAgICApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChhcGlEYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhcGlEYXRhLmxvY2F0aW9ucztcbiAgICAgICAgaWYgKGRhdGFbMF0ubG9jYXRpb25UeXBlID09PSAnUE9TVEFMX0NPREUnKSB7XG4gICAgICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gJ0FkcmVzcyBpcyBvbmp1aXN0JztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YVswXS5sb2NhdGlvblR5cGUgPT09ICdFWEFDVF9BRERSRVNTJykge1xuICAgICAgICAgIGNpdHkudGV4dENvbnRlbnQgPSBkYXRhWzBdLmFkZHJlc3MuY2l0eTtcbiAgICAgICAgICBzdHJlZXQudGV4dENvbnRlbnQgPSBkYXRhWzBdLmFkZHJlc3Muc3RyZWV0O1xuICAgICAgICAgIHppcENvZGVUZXh0LnRleHRDb250ZW50ID0gZGF0YVswXS5hZGRyZXNzLnBvc3RhbENvZGU7XG4gICAgICAgICAgcHJvdmluY2UudGV4dENvbnRlbnQgPSBkYXRhWzBdLmFkZHJlc3Muc3RhdGU7XG5cbiAgICAgICAgICBjaXR5SW5wdXQudmFsdWUgPSBkYXRhWzBdLmFkZHJlc3MuY2l0eTtcbiAgICAgICAgICBzdHJlZXRJbnB1dC52YWx1ZSA9IGRhdGFbMF0uYWRkcmVzcy5zdHJlZXQ7XG4gICAgICAgICAgemlwQ29kZVRleHRJbnB1dC52YWx1ZSA9IGRhdGFbMF0uYWRkcmVzcy5wb3N0YWxDb2RlO1xuICAgICAgICAgIHByb3ZpbmNlSW5wdXQudmFsdWUgPSBkYXRhWzBdLmFkZHJlc3Muc3RhdGU7XG4gICAgICAgICAgbGF0SW5wdXQudmFsdWUgPSBkYXRhWzBdLnJlZmVyZW5jZVBvc2l0aW9uLmxhdGl0dWRlO1xuICAgICAgICAgIGxuZ0lucHV0LnZhbHVlID0gZGF0YVswXS5yZWZlcmVuY2VQb3NpdGlvbi5sb25naXR1ZGU7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfSk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHlsZUJ1dHRvbigpIHtcbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9yZWdpc3RlcicpIHtcbiAgICBvbGRCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM1MTkxODgnO1xuICAgIG9sZEJ1dHRvbi5zdHlsZS5ib3hTaGFkb3cgPSAnMHB4IDBweCA1cHggIzUxOTE4OCc7XG4gICAgb2xkQnV0dG9uLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgb2xkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG5cbiAgICBjYXJlQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgY2FyZUJ1dHRvbi5zdHlsZS5ib3hTaGFkb3cgPSAnbm9uZSc7XG4gICAgY2FyZUJ1dHRvbi5zdHlsZS5mb250V2VpZ2h0ID0gJ25vcm1hbCc7XG4gIH1cbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9yZWdpc3Rlci16b3JnJykge1xuICAgIGNhcmVCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM1MTkxODgnO1xuICAgIGNhcmVCdXR0b24uc3R5bGUuYm94U2hhZG93ID0gJzBweCAwcHggNXB4ICM1MTkxODgnO1xuICAgIGNhcmVCdXR0b24uc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICBjYXJlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG5cbiAgICBvbGRCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICBvbGRCdXR0b24uc3R5bGUuYm94U2hhZG93ID0gJ25vbmUnO1xuICAgIG9sZEJ1dHRvbi5zdHlsZS5mb250V2VpZ2h0ID0gJ25vcm1hbCc7XG4gIH1cbn1cblxuc3R5bGVCdXR0b24oKTtcbiJdLCJuYW1lcyI6WyJpbWciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvbGRCdXR0b24iLCJjYXJlQnV0dG9uIiwiQVBJX0tFWSIsInBpY3R1cmUiLCJnZXRFbGVtZW50QnlJZCIsInNlbGVjdFBpY3R1cmUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsImltZ0ZpbGUiLCJpbWdTcmMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJzcmMiLCJyZWdleCIsImZvcm1FbGVtZW50IiwiZXJyb3JNZXNzYWdlIiwiemlwQ29kZSIsImhvdXNlTnVtYmVyIiwiYWRyZXNzQnV0dG9uIiwiY2l0eSIsInN0cmVldCIsInppcENvZGVUZXh0IiwicHJvdmluY2UiLCJjaXR5SW5wdXQiLCJzdHJlZXRJbnB1dCIsInppcENvZGVUZXh0SW5wdXQiLCJwcm92aW5jZUlucHV0IiwicGljdHVyZUlucHV0IiwibGF0SW5wdXQiLCJsbmdJbnB1dCIsInN0eWxlQnV0dG9uIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2hhZG93IiwiZm9udFdlaWdodCIsImNsYXNzTGlzdCIsImFkZCIsInByZXZlbnREZWZhdWx0IiwidGVzdCIsInZhbHVlIiwidGV4dENvbnRlbnQiLCJzdWJtaXQiLCJhc3luYyIsInRvVXBwZXJDYXNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYXBpS2V5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJhcGlEYXRhIiwibG9jYXRpb25zIiwibG9jYXRpb25UeXBlIiwiYWRkcmVzcyIsInBvc3RhbENvZGUiLCJzdGF0ZSIsInJlZmVyZW5jZVBvc2l0aW9uIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJjYXRjaCIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxJQUFNQyxTQUFTQyxjQUFjLFFBQzdCQyxVQUFZRixTQUFTQyxjQUFjLGVBQ25DRSxXQUFhSCxTQUFTQyxjQUFjLGNBQ3BDRyxRQUNKLCtGQUNJQyxRQUFVTCxTQUFTTSxlQUFlLGVBRXhDLFNBQVNDLGdCQUNIRixTQUNGQSxRQUFRRyxpQkFBaUIsU0FBVSxJQUNDLElBQTlCQyxFQUFNQyxPQUFPQyxNQUFNQyxTQUNmQyxFQUFVSixFQUFNQyxPQUFPQyxNQUFNLEdBQzdCRyxFQUFTQyxJQUFJQyxnQkFBZ0JILEdBQ25DZCxJQUFJa0IsSUFBTUgsS0FNbEJQLGdCQUVBLE1BQU1X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

const latData=document.querySelector("#lat").value,latNumber=parseFloat(latData),lngData=document.querySelector("#lng").value,lngNumber=parseFloat(lngData);function initMap(){var a={lat:latNumber,lng:lngNumber},e=new google.maps.Map(document.getElementById("map"),{zoom:14,center:a});new google.maps.Marker({position:a,map:e})}window.initMap=initMap;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWxzLmpzIiwic291cmNlcyI6WyJ1c2VyLWRldGFpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbGF0RGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYXQnKS52YWx1ZTtcbmNvbnN0IGxhdE51bWJlciA9IHBhcnNlRmxvYXQobGF0RGF0YSk7XG5jb25zdCBsbmdEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xuZycpLnZhbHVlO1xuY29uc3QgbG5nTnVtYmVyID0gcGFyc2VGbG9hdChsbmdEYXRhKTtcblxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcbiAgLy8gVGhlIGxvY2F0aW9uIG9mIFVsdXJ1XG4gIGNvbnN0IHBvc2l0aW9uID0ge1xuICAgIGxhdDogbGF0TnVtYmVyLFxuICAgIGxuZzogbG5nTnVtYmVyLFxuICB9O1xuICAvLyBUaGUgbWFwLCBjZW50ZXJlZCBhdCBVbHVydVxuICBjb25zdCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xuICAgIHpvb206IDE0LFxuICAgIGNlbnRlcjogcG9zaXRpb24sXG4gIH0pO1xuICAvLyBUaGUgbWFya2VyLCBwb3NpdGlvbmVkIGF0IFVsdXJ1XG4gIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgIHBvc2l0aW9uLFxuICAgIG1hcCxcbiAgfSk7XG59XG53aW5kb3cuaW5pdE1hcCA9IGluaXRNYXA7XG4iXSwibmFtZXMiOlsibGF0RGF0YSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwibGF0TnVtYmVyIiwicGFyc2VGbG9hdCIsImxuZ0RhdGEiLCJsbmdOdW1iZXIiLCJpbml0TWFwIiwicG9zaXRpb24iLCJsYXQiLCJsbmciLCJtYXAiLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiZ2V0RWxlbWVudEJ5SWQiLCJ6b29tIiwiY2VudGVyIiwiTWFya2VyIiwid2luZG93Il0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxRQUFVQyxTQUFTQyxjQUFjLFFBQVFDLE1BQ3pDQyxVQUFZQyxXQUFXTCxTQUN2Qk0sUUFBVUwsU0FBU0MsY0FBYyxRQUFRQyxNQUN6Q0ksVUFBWUYsV0FBV0MsU0FFN0IsU0FBU0UsVUFFUCxJQUFNQyxFQUFXLENBQ2ZDLElBQUtOLFVBQ0xPLElBQUtKLFdBR0RLLEVBQU0sSUFBSUMsT0FBT0MsS0FBS0MsSUFBSWQsU0FBU2UsZUFBZSxPQUFRLENBQzlEQyxLQUFNLEdBQ05DLE9BQVFULElBR0ssSUFBSUksT0FBT0MsS0FBS0ssT0FBTyxDQUNwQ1YsU0FBQUEsRUFDQUcsSUFBQUEsSUFHSlEsT0FBT1osUUFBVUEifQ==

const nextButton=document.querySelector(".next"),prevButton=document.querySelector(".previous"),carouselWrapper=document.querySelector(".x-overflow"),carouselItem=document.querySelector(".section");carouselWrapper.style.overflowX="hidden",nextButton.addEventListener("click",()=>{carouselWrapper.scrollLeft+=carouselItem.clientWidth}),prevButton.addEventListener("click",()=>{carouselWrapper.scrollLeft-=carouselItem.clientWidth});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VzIjpbInVzZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dCcpO1xuY29uc3QgcHJldkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aW91cycpO1xuY29uc3QgY2Fyb3VzZWxXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLngtb3ZlcmZsb3cnKTtcbmNvbnN0IGNhcm91c2VsSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uJyk7XG5cbmNhcm91c2VsV3JhcHBlci5zdHlsZS5vdmVyZmxvd1ggPSAnaGlkZGVuJztcblxubmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY2Fyb3VzZWxXcmFwcGVyLnNjcm9sbExlZnQgKz0gY2Fyb3VzZWxJdGVtLmNsaWVudFdpZHRoO1xufSk7XG5cbnByZXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNhcm91c2VsV3JhcHBlci5zY3JvbGxMZWZ0IC09IGNhcm91c2VsSXRlbS5jbGllbnRXaWR0aDtcbn0pOyJdLCJuYW1lcyI6WyJuZXh0QnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHJldkJ1dHRvbiIsImNhcm91c2VsV3JhcHBlciIsImNhcm91c2VsSXRlbSIsInN0eWxlIiwib3ZlcmZsb3dYIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbExlZnQiLCJjbGllbnRXaWR0aCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsV0FBYUMsU0FBU0MsY0FBYyxTQUNwQ0MsV0FBYUYsU0FBU0MsY0FBYyxhQUNwQ0UsZ0JBQWtCSCxTQUFTQyxjQUFjLGVBQ3pDRyxhQUFlSixTQUFTQyxjQUFjLFlBRTVDRSxnQkFBZ0JFLE1BQU1DLFVBQVksU0FFbENQLFdBQVdRLGlCQUFpQixRQUFTLEtBQ25DSixnQkFBZ0JLLFlBQWNKLGFBQWFLLGNBRzdDUCxXQUFXSyxpQkFBaUIsUUFBUyxLQUNuQ0osZ0JBQWdCSyxZQUFjSixhQUFhSyJ9
