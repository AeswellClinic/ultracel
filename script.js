     const button = document.querySelector('.google-button');
      button.classList.add('active');
    });

 
    document.addEventListener('mouseout', function() {
      const button = document.querySelector('.google-button');
      button.classList.remove('active');
    });
