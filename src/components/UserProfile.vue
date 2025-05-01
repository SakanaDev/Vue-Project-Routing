<script>
export default {
    props: ['currentUser']
}
</script>

<template>
    <div class="content-section">
        <h2>Profile Information</h2>
        <p><strong>Name:</strong> {{ currentUser.name }}</p>
        <p><strong>Role:</strong> {{ currentUser.role }}</p>
        <p><strong>Location:</strong> {{ currentUser.location }}</p>
        <p><strong>Bio:</strong> {{ currentUser.bio }}</p>
        <p><strong>Education:</strong> {{ currentUser.education }}</p>
    </div>
</template>

<style>
.content-section {
  display: block;
  padding: 20px;
  animation: fadeIn 0.5s ease;
}

h2 {
  color: #42b883;
  margin-bottom: 20px;
  font-size: 28px;
}

p {
  margin-bottom: 15px;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>