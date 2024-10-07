 .MuiSkeleton-wave {
    overflow: hidden;
    position: relative;
  }
  .MuiSkeleton-wave::after {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    position: absolute;
    animation: MuiSkeleton-keyframes-wave 1.6s linear 0.5s infinite;
    transform: translateX(-100%);
    background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.04), transparent);
  }
@keyframes MuiSkeleton-keyframes-wave {
  0% {
    transform: translateX(-100%);
  }
  60% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(100%);
  }
}
