const btn_publier = document.querySelector('#publier');
const page_pub_annonce = document.querySelector('#pub');
const page_contenaire = document.querySelector('#contenaire');
const btn_inscrire = document.querySelector('#com_inscrire');
const btn_voirplus = document.querySelector('#voirplus');
const h2 = document.querySelector('#h2');
const h3 = document.querySelector('#h3');
const h4 = document.querySelector('#h4');
const h5 = document.querySelector('#h5');
const div_marketing = document.querySelector('#marketing');
const div_communauter = document.querySelector('#communauter');
const div_propriete = document.querySelector('#propriete');
const div_recherche = document.querySelector('#rechercher');
const div_footer = document.querySelector('#footer');
const div_header =document.querySelector('#header');
const form_pub = document.querySelector('#form_publier');
const btn_acceuil =document.querySelector('#btn_acceuil');
const btn_acceuil1 =document.querySelector('#btn_acceuil1');
const btn_logo =document.querySelector('#logo');
const page_inscrip = document.querySelector('#inscription');
const btn_inscrire1 = document.querySelector('#btn1');
const btn_conn = document.querySelector('#btn2');
const page_connexion = document.querySelector('#connexionn');
const page_offres = document.querySelector('#desoffre');
const btn_offres = document.querySelector('#btn_offres');
const form_inscription= document.querySelector('#form_inscription');
const form_connexion = document.querySelector('#form_connexion');
const btn_inscription = document.querySelector('#inscription');
const btn_recherche = document.querySelector('#btn_search');
const btn_voiroffre = document.querySelector('#voiroffre');
const btn_compte= document.querySelector('#compte');
const show = document.querySelector('#erreur_pub');
const btn_deconn= document.querySelector("#btn3");
const btn_publication_head = document.querySelector('#btn4');
const dashbord = document.querySelector('#dashbord');
const page_contact = document.querySelector('#contact_page');
const btn_contact = document.querySelector('#btn_contact');
const btn_voirplus_offre = document.querySelector('#voirplus1');
const menu= document.querySelector('#menu');
const header_non_connceter = document.querySelector('#menu_header');
const menu2= document.querySelector('#menu2');



function interaction_site_utilisateur_non_conncter(){
    btn_acceuil.addEventListener('click', (e)=>{
        e.preventDefault();
        window.location.reload();
    });

    menu.addEventListener('click', ()=>{
        header_non_connceter.style.display='block';
    });

    const btn_acceuil_menu = document.querySelector('#btn_acceuil_menu').addEventListener('click', (e)=>{
        e.preventDefault();
        window.location.reload();
    });

    const btn_offres_menu= document.querySelector('#btn_offres_menu').addEventListener('click', ()=>{
        page_pub_annonce.style.display = 'none';
        page_contenaire.style.display = 'none';
        btn_inscrire.style.display = 'none';
        btn_voirplus.style.display = 'none';
        btn_publier.style.display= 'none';
        h2.style.display ='none';
        h3.style.display ='none';
        h4.style.display ='none';
        h5.style.display ='none';
        div_communauter.style.display= 'none';
        div_marketing.style.display= 'none';
        div_propriete.style.display='none';
        div_recherche.style.display= 'none'; 
        div_footer.style.display = 'none';
        div_header.style.display ='block';
        page_inscrip.style.display='none';
        page_connexion.style.display ='none';
        page_offres.style.display='block';
        page_contact.style.display='none';
        header_non_connceter.style.display='none';
    });

    const btn_contact_menu = document.querySelector('#btn_contact_menu').addEventListener('click', ()=>{
        page_pub_annonce.style.display = 'none';
        page_contenaire.style.display = 'none';
        btn_inscrire.style.display = 'none';
        btn_voirplus.style.display = 'none';
        btn_publier.style.display= 'none';
        h2.style.display ='none';
        h3.style.display ='none';
        h4.style.display ='none';
        h5.style.display ='none';
        div_communauter.style.display= 'none';
        div_marketing.style.display= 'none';
        div_propriete.style.display='none';
        div_recherche.style.display= 'none'; 
        div_footer.style.display = 'none';
        div_header.style.display ='block';
        page_inscrip.style.display='none';
        page_connexion.style.display ='none';
        page_offres.style.display='none';
        page_contact.style.display='block';
        header_non_connceter.style.display='none';
    })

    const btn_menu1 = document.querySelector('#btn_menu1').addEventListener('click', ()=>{
        page_pub_annonce.style.display = 'none';
        page_contenaire.style.display = 'none';
        btn_inscrire.style.display = 'none';
        btn_voirplus.style.display = 'none';
        btn_publier.style.display= 'none';
        h2.style.display ='none';
        h3.style.display ='none';
        h4.style.display ='none';
        h5.style.display ='none';
        div_communauter.style.display= 'none';
        div_marketing.style.display= 'none';
        div_propriete.style.display='none';
        div_recherche.style.display= 'none'; 
        div_footer.style.display = 'none';
        div_header.style.display ='block';
        page_inscrip.style.display='none';
        page_connexion.style.display ='block';
        page_offres.style.display='none';
        page_contact.style.display='none';
        header_non_connceter.style.display='none';
    });

    const btn_menu2 = document.querySelector('#btn_menu2').addEventListener('click', ()=>{
        page_pub_annonce.style.display = 'none';
        page_contenaire.style.display = 'none';
        btn_inscrire.style.display = 'none';
        btn_voirplus.style.display = 'none';
        btn_publier.style.display= 'none';
        h2.style.display ='none';
        h3.style.display ='none';
        h4.style.display ='none';
        h5.style.display ='none';
        div_communauter.style.display= 'none';
        div_marketing.style.display= 'none';
        div_propriete.style.display='none';
        div_recherche.style.display= 'none'; 
        div_footer.style.display = 'none';
        div_header.style.display ='block';
        page_inscrip.style.display='block';
        page_connexion.style.display ='none';
        page_offres.style.display='none';
        page_contact.style.display='none';
        header_non_connceter.style.display='none';
    });

   
    btn_publier.addEventListener('click', ()=>{
        show.style.display = 'block';
        page_pub_annonce.style.display = 'none';
        page_contenaire.style.display = 'none';
        btn_inscrire.style.display = 'none';
        btn_voirplus.style.display = 'none';
        btn_publier.style.display= 'none';
        h2.style.display ='none';
        h3.style.display ='none';
        h4.style.display ='none';
        h5.style.display ='none';
        div_communauter.style.display= 'none';
        div_marketing.style.display= 'none';
        div_propriete.style.display='none';
        div_recherche.style.display= 'none'; 
        div_footer.style.display = 'none';
        div_header.style.display ='block';
        page_connexion.style.display ='none';
        page_offres.style.display='none';
        page_inscrip.style.display='none';
        page_contact.style.display='none';
       });

    btn_inscrire.addEventListener('click', ()=>{
        page_pub_annonce.style.display = 'none';
        page_contenaire.style.display = 'none';
        btn_inscrire.style.display = 'none';
        btn_voirplus.style.display = 'none';
        btn_publier.style.display= 'none';
        h2.style.display ='none';
        h3.style.display ='none';
        h4.style.display ='none';
        h5.style.display ='none';
        div_communauter.style.display= 'none';
        div_marketing.style.display= 'none';
        div_propriete.style.display='none';
        div_recherche.style.display= 'none'; 
        div_footer.style.display = 'none';
        div_header.style.display ='block';
        page_inscrip.style.display='block';
        page_connexion.style.display ='none';
        page_offres.style.display='none';
        page_contact.style.display='none';
    });

    btn_inscrire1.addEventListener('click', ()=>{
        page_pub_annonce.style.display = 'none';
        page_contenaire.style.display = 'none';
        btn_inscrire.style.display = 'none';
        btn_voirplus.style.display = 'none';
        btn_publier.style.display= 'none';
        h2.style.display ='none';
        h3.style.display ='none';
        h4.style.display ='none';
        h5.style.display ='none';
        div_communauter.style.display= 'none';
        div_marketing.style.display= 'none';
        div_propriete.style.display='none';
        div_recherche.style.display= 'none'; 
        div_footer.style.display = 'none';
        div_header.style.display ='block';
        page_inscrip.style.display='block';
        page_connexion.style.display ='none';
        page_offres.style.display='none';
        page_contact.style.display='none';
    });

    btn_conn.addEventListener('click', ()=>{
        page_pub_annonce.style.display = 'none';
        page_contenaire.style.display = 'none';
        btn_inscrire.style.display = 'none';
        btn_voirplus.style.display = 'none';
        btn_publier.style.display= 'none';
        h2.style.display ='none';
        h3.style.display ='none';
        h4.style.display ='none';
        h5.style.display ='none';
        div_communauter.style.display= 'none';
        div_marketing.style.display= 'none';
        div_propriete.style.display='none';
        div_recherche.style.display= 'none'; 
        div_footer.style.display = 'none';
        div_header.style.display ='block';
        page_inscrip.style.display='none';
        page_connexion.style.display ='block';
        page_offres.style.display='none';
        page_contact.style.display='none';
    });

    btn_offres.addEventListener('click', ()=>{
        page_pub_annonce.style.display = 'none';
        page_contenaire.style.display = 'none';
        btn_inscrire.style.display = 'none';
        btn_voirplus.style.display = 'none';
        btn_publier.style.display= 'none';
        h2.style.display ='none';
        h3.style.display ='none';
        h4.style.display ='none';
        h5.style.display ='none';
        div_communauter.style.display= 'none';
        div_marketing.style.display= 'none';
        div_propriete.style.display='none';
        div_recherche.style.display= 'none'; 
        div_footer.style.display = 'none';
        div_header.style.display ='block';
        page_inscrip.style.display='none';
        page_connexion.style.display ='none';
        page_offres.style.display='block';
        page_contact.style.display='none';
    }); 
    btn_contact.addEventListener('click', ()=>{
        page_pub_annonce.style.display = 'none';
        page_contenaire.style.display = 'none';
        btn_inscrire.style.display = 'none';
        btn_voirplus.style.display = 'none';
        btn_publier.style.display= 'none';
        h2.style.display ='none';
        h3.style.display ='none';
        h4.style.display ='none';
        h5.style.display ='none';
        div_communauter.style.display= 'none';
        div_marketing.style.display= 'none';
        div_propriete.style.display='none';
        div_recherche.style.display= 'none'; 
        div_footer.style.display = 'none';
        div_header.style.display ='block';
        page_inscrip.style.display='none';
        page_connexion.style.display ='none';
        page_offres.style.display='none';
        page_contact.style.display='block';
    }); 

    btn_voirplus.addEventListener('click', ()=>{
        page_pub_annonce.style.display = 'none';
        page_contenaire.style.display = 'none';
        btn_inscrire.style.display = 'none';
        btn_voirplus.style.display = 'none';
        btn_publier.style.display= 'none';
        h2.style.display ='none';
        h3.style.display ='none';
        h4.style.display ='none';
        h5.style.display ='none';
        div_communauter.style.display= 'none';
        div_marketing.style.display= 'none';
        div_propriete.style.display='none';
        div_recherche.style.display= 'none'; 
        div_footer.style.display = 'none';
        div_header.style.display ='block';
        page_inscrip.style.display='none';
        page_connexion.style.display ='none';
        page_offres.style.display='block';
        page_contact.style.display='none';
    });

    
};

function connexion(){
   form_connexion.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.querySelector('#email_conn');
    const pass = document.querySelector('#password_conn');

    if (email.value == 'salah' || pass.value == 'mariammaman'){
        alert('connexion reussi....!');
    }

    else{
         window.location.reload();
    }
 
   });
};



interaction_site_utilisateur_non_conncter();
