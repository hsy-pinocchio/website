// 페이지 로드 시 애니메이션 효과
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  
  sections.forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      section.style.transition = 'all 0.5s ease';
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }, 200 * index);
  });

  // 네비게이션 링크 활성화 처리
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // 현재 활성화된 링크의 active 클래스 제거
      navLinks.forEach(l => l.classList.remove('active'));
      // 클릭된 링크에 active 클래스 추가
      e.target.classList.add('active');
    });
  });

  // 스크롤 시 네비게이션 바 그림자 효과
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
      // 아래로 스크롤
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      // 위로 스크롤
      navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
  });
}); 