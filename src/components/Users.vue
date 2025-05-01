<script>
</script>

<template>
    <div class="creators-container">
      <h1 class="main-title">V.js Visionaries</h1>
      <p class="subtitle">The brilliant minds behind Vue.js</p>
      
      <div class="creators-grid">
        <RouterLink to="/user/1" class="creator-card">
          <div class="photo-container">
            <img src="../assets/evan-you.jpg" alt="Evan You" class="profile-photo">
          </div>
          <h2 class="creator-name">Evan You</h2>
        </RouterLink>
  
        <RouterLink to="/user/2" class="creator-card">
          <div class="photo-container">
            <img src="../assets/ben-hong.png" alt="Ben Hong" class="profile-photo">
          </div>
          <h2 class="creator-name">Ben Hong</h2>
        </RouterLink>
      </div>
    </div>
  </template>
  
  <style scoped>
  .creators-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }
  
  .main-title {
    font-size: 2.8rem;
    color: #42b883;
    margin-bottom: 0.5rem;
    font-weight: 700;
  }
  
  .subtitle {
    font-size: 1.2rem;
    color: #7f8c8d;
    margin-bottom: 3rem;
  }
  
  .creators-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
    justify-items: center;
  }
  
  .creator-card {
    text-decoration: none;
    color: inherit;
    transition: transform 0.3s ease;
  }
  
  .creator-card:hover {
    transform: translateY(-8px);
  }
  
  .photo-container {
    width: 280px;
    height: 280px;
    border-radius: 16px;
    overflow: hidden;
    margin: 0 auto 1.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    border: 6px solid white;
    transition: all 0.3s ease;
  }
  
  .creator-card:hover .photo-container {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    border-color: #42b883;
  }
  
  .profile-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .creator-card:hover .profile-photo {
    transform: scale(1.05);
  }
  
  .creator-name {
    font-size: 1.8rem;
    color: #2c3e50;
    margin: 0;
    font-weight: 600;
    transition: color 0.3s ease;
  }
  
  .creator-card:hover .creator-name {
    color: #42b883;
  }
  
  @media (max-width: 768px) {
    .creators-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .photo-container {
      width: 240px;
      height: 240px;
    }
    
    .creator-name {
      font-size: 1.6rem;
    }
  }
  </style>