function reveal() {
    const container = document.querySelector('.container');
    const containerPosition = container.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (containerPosition < screenPosition) {
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }
}

const links = document.querySelectorAll('.link');
links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'translateY(-3px)';
    });
    link.addEventListener('mouseout', () => {
        link.style.transform = 'translateY(0)';
    });
});

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

window.addEventListener('scroll', reveal);
reveal();

// Share functionality
const shareButton = document.getElementById('shareButton');
let timeoutId;

function showToast(message) {
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    timeoutId = setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 2000);
}

shareButton.addEventListener('click', async () => {
    const currentUrl = window.location.href;

    try {
        if (navigator.share) {
            await navigator.share({
                title: 'KhoaDev',
                text: 'Cảm ơn bạn đã yêu thương Khoa.',
                url: currentUrl
            });
            showToast('Đã chia sẻ thành công!');
        } else {
            await navigator.clipboard.writeText(currentUrl);
            shareButton.classList.add('copied');
            shareButton.innerHTML = '<i class="fas fa-check"></i> Đã copy link!';
            showToast('Đã copy link vào clipboard!');

            setTimeout(() => {
                shareButton.classList.remove('copied');
                shareButton.innerHTML = '<i class="fas fa-share-alt"></i> Share';
            }, 2000);
        }
    } catch (err) {
        console.error('Error sharing:', err);
        showToast('Có lỗi xảy ra khi chia sẻ!');
    }
}); 