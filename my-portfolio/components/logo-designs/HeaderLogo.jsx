function HeaderLogo() {
    return (
        <div className="flex flex-col items-center justify-center mt-40">
            <div className="animate-slide-down">
                <img className="w-25" src="/logobrush.png" alt="figma logo" />
            </div>
            <img className="w-100" src="/dots.png" alt="dots" />
            <div className="animate-slide-up">
                <img className="w-80" src="/macbrush.png" alt="figma mac" />
            </div>
            <style jsx>{`
              @keyframes slideDown {
                from {
                  transform: translateY(-100px);
                  opacity: 0;
                }
                to {
                  transform: translateY(0);
                  opacity: 1;
                }
              }
              @keyframes slideUp {
                from {
                  transform: translateY(100px);
                  opacity: 0;
                }
                to {
                  transform: translateY(0);
                  opacity: 1;
                }
              }
              .animate-slide-down {
                animation: slideDown 1s ease-out forwards;
              }
              .animate-slide-up {
                animation: slideUp 1s ease-out forwards;
              }
            `}</style>
        </div>
    )
}

export default HeaderLogo
