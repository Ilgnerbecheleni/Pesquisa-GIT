
const avatar = document.querySelector('.avatar');
const user_name = document.querySelector('.name_user');
const bio_user = document.querySelector('.bio_user');
const location_user = document.querySelector('.location_user');
const form = document.querySelector('.form');
const following = document.querySelector('.following');
const followers = document.querySelector('.followers');
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');

const fetchUser = async (user)=>{
    const APIresponse = await fetch(` https://api.github.com/users/${user}`);  // await espera o fetch terminar
    
    if(APIresponse.status ===200){//verifica se OK
        const data = await APIresponse.json()
        return data ;
    }
}



   


   renderName= async (nome)=>{

     data = await fetchUser(nome);

     if(data){
        console.log(data);
        user_name.innerHTML =  data['name'];
        avatar.src = data['avatar_url'];
        bio_user.innerHTML = data['bio'];
        location_user.innerHTML = data ['location'];
        followers.innerHTML = data['followers'];
        following.innerHTML = data['following'];
     }else{
        user_name.innerHTML =  'none..';
        avatar.src =  './images/git.jpg';
        bio_user.innerHTML =  'none..';
        location_user.innerHTML =  'none..';
        followers.innerHTML =  'none..';
        following.innerHTML =  'none..';
     }
   
   };

   form.addEventListener('submit',(event)=>{

    event.preventDefault();
    renderName(search.value.toLowerCase());


   });

   btn.addEventListener('click',()=>{
data = search.value ;
    if(data){
        console.log('enviado')
    }


   });



   //renderName('ilgnerbecheleni');