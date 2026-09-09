@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Cairo', sans-serif;
}

body {
    background: #030712;
    color: #f3f4f6;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
    position: relative;
    overflow-x: hidden;
}

/* خلفية تفاعلية بوهج نيون هادئ وفخم */
body::before {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
    top: -100px;
    left: -100px;
    z-index: 0;
}

body::after {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
    bottom: -100px;
    right: -100px;
    z-index: 0;
}

.container {
    width: 100%;
    max-width: 520px;
    background: rgba(17, 24, 39, 0.7);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 32px;
    padding: 40px 28px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
    position: relative;
    z-index: 1;
}

/* الهيدر الفخم */
.profile-header {
    text-align: center;
    margin-bottom: 35px;
}

.avatar-container {
    position: relative;
    width: 130px;
    height: 130px;
    margin: 0 auto 20px;
}

.store-logo {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #1f2937;
    position: relative;
    z-index: 2;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
}

.glow-effect {
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: linear-gradient(135deg, #06b6d4, #9333ea, #ec4899);
    border-radius: 50%;
    z-index: 1;
    filter: blur(8px);
    opacity: 0.8;
    animation: pulseGlow 4s ease-in-out infinite alternate;
}

@keyframes pulseGlow {
    0% { transform: scale(0.97); opacity: 0.6; }
    100% { transform: scale(1.03); opacity: 1; }
}

.profile-header h1 {
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 1.5px;
    color: #ffffff;
    margin-bottom: 6px;
    text-transform: uppercase;
}

.tagline {
    font-size: 14px;
    color: #9ca3af;
    margin-bottom: 16px;
    font-weight: 600;
}

.status-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.3);
    padding: 6px 16px;
    border-radius: 100px;
    font-size: 12px;
    color: #34d399;
    font-weight: 700;
}

.pulse {
    width: 8px;
    height: 8px;
    background-color: #34d399;
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.7);
    animation: pulseAnim 1.5s infinite;
}

@keyframes pulseAnim {
    0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.7); }
    70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(52, 211, 153, 0); }
    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
}

/* الأقسام والعناوين */
.links-section {
    margin-bottom: 25px;
}

.links-section h2 {
    font-size: 14px;
    color: #9ca3af;
    margin-bottom: 12px;
    font-weight: 700;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding-right: 4px;
}

.links-section h2 i {
    color: #06b6d4;
}

/* الأزرار العصرية المتميزة */
.custom-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(31, 41, 55, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.06);
    padding: 16px 20px;
    border-radius: 18px;
    color: #fff;
    text-decoration: none;
    margin-bottom: 12px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-weight: 700;
    font-size: 15px;
}

.custom-btn i:first-child {
    font-size: 20px;
    width: 28px;
    text-align: center;
}

.custom-btn span {
    flex: 1;
    text-align: right;
    padding-right: 12px;
}

.arrow {
    font-size: 12px;
    color: #4b5563;
    transition: transform 0.3s ease, color 0.3s ease;
}

.custom-btn:hover {
    background: rgba(31, 41, 55, 0.9);
    border-color: rgba(6, 182, 212, 0.4);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
}

.custom-btn:hover .arrow {
    transform: translateX(-4px);
    color: #06b6d4;
}

/* ألوان الأيقونات */
.whatsapp-btn i:first-child { color: #22c55e; }
.channel-btn i:first-child { color: #06b6d4; }
.fb-btn i:first-child { color: #3b82f6; }
.insta-btn i:first-child { color: #ec4899; }
.guarantee-btn i:first-child { color: #eab308; }

/* مربعات الدفع والنسخ الاحترافية */
.copy-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(31, 41, 55, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.06);
    padding: 14px 18px;
    border-radius: 18px;
    margin-bottom: 12px;
    transition: all 0.3s ease;
}

.copy-box:hover {
    border-color: rgba(255, 255, 255, 0.15);
    background: rgba(31, 41, 55, 0.8);
}

.copy-box .info {
    display: flex;
    align-items: center;
    gap: 14px;
}

.copy-box .info i {
    font-size: 22px;
    color: #06b6d4;
    width: 28px;
    text-align: center;
}

.copy-box .label {
    display: block;
    font-size: 11px;
    color: #9ca3af;
    font-weight: 600;
}

.copy-box .value {
    display: block;
    font-size: 15px;
    font-weight: 800;
    color: #fff;
    letter-spacing: 0.5px;
}

.copy-btn {
    background: rgba(6, 182, 212, 0.1);
    border: 1px solid rgba(6, 182, 212, 0.3);
    color: #22d3ee;
    padding: 8px 14px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 13px;
    font-weight: 700;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 6px;
}

.copy-btn:hover {
    background: #06b6d4;
    color: #030712;
    box-shadow: 0 0 15px rgba(6, 182, 212, 0.4);
}

/* الفوتر */
footer {
    text-align: center;
    margin-top: 25px;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    font-size: 12px;
    color: #6b7280;
}

footer span {
    color: #06b6d4;
    font-weight: 700;
}

/* الموبايل والشاشات الصغيرة */
@media (max-width: 480px) {
    body {
        padding: 12px;
    }
    .container {
        padding: 28px 18px;
        border-radius: 24px;
    }
    .profile-header h1 {
        font-size: 26px;
    }
    .avatar-container {
        width: 110px;
        height: 110px;
    }
    .custom-btn {
        padding: 14px 16px;
        font-size: 14px;
    }
    .copy-box {
        padding: 12px 14px;
    }
    .copy-box .value {
        font-size: 14px;
    }
}