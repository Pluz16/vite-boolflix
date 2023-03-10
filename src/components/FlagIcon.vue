<template>
    <span class="flag-icon" :class="'flag-icon-' + countryCode.toLowerCase()"></span>
  </template>
  
  <script>
  export default {
    props: ['countryCode']
  }
  </script>
  
  <style>
  .flag-icon {
    vertical-align: middle;
    color: azure;
  }
  </style>
  