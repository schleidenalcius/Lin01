getApiInfo();
 
async function getApiInfo() {
  try {
    const response = await fetch('https://www.freetogame.com/api/games');
    const data = await response.json();
    afficherData(data);
   
  } catch (error) {
    console.error('Erreur :', error);
    alert('Erreur :', error);
  }
}

function afficherData(data){
   

}