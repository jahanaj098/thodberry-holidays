const destinations = [
    {
        id: 'rishikesh',
        title: 'Rishikesh',
        tag: 'Yoga & Adventure',
        image: 'assets/rishikesh.png',
        budget: {
            total: '₹4,500',
            days: 3,
            breakdown: [
                { category: 'Transport', detail: 'Sleeper Train + Shared Auto', price: '₹1,200' },
                { category: 'Stay', detail: 'Bunk Bed in Hostel (3 nights)', price: '₹1,500' },
                { category: 'Food', detail: 'Local Cafes & Street Food', price: '₹1,200' },
                { category: 'Activities', detail: 'Ganga Aarti + Local Trek', price: '₹600' }
            ],
            tip: 'Use shared autos from the station to Tapovan to save ₹300.'
        }
    },
    {
        id: 'varanasi',
        title: 'Varanasi',
        tag: 'Spiritual Soul',
        image: 'assets/varanasi.png',
        budget: {
            total: '₹3,800',
            days: 3,
            breakdown: [
                { category: 'Transport', detail: 'Train (General/Sleeper)', price: '₹800' },
                { category: 'Stay', detail: 'Old City Guest House', price: '₹1,200' },
                { category: 'Food', detail: 'Lassi, Chaat & Bhandara', price: '₹1,000' },
                { category: 'Local', detail: 'Boat Ride + Walking Tours', price: '₹800' }
            ],
            tip: 'Stay in the narrow alleys near Dashashwamedh Ghat for the real vibe and low costs.'
        }
    },
    {
        id: 'hampi',
        title: 'Hampi',
        tag: 'Ancient Ruins',
        image: 'assets/hampi.png',
        budget: {
            total: '₹5,200',
            days: 4,
            breakdown: [
                { category: 'Transport', detail: 'Overnight Bus from Bangalore', price: '₹1,400' },
                { category: 'Stay', detail: 'Home Stay in Hampi Island', price: '₹1,600' },
                { category: 'Food', detail: 'German Bakeries & Thalis', price: '₹1,200' },
                { category: 'Bike Rental', detail: 'Moped + Petrol (3 days)', price: '₹1,000' }
            ],
            tip: 'Rent a moped on the "other side" of the river for freedom to explore the boulders.'
        }
    },
    {
        id: 'gokarna',
        title: 'Gokarna',
        tag: 'Beaches & Cliffs',
        image: 'assets/gokarna.png',
        budget: {
            total: '₹4,800',
            days: 3,
            breakdown: [
                { category: 'Transport', detail: 'Train/Bus from Hubli/Goa', price: '₹1,000' },
                { category: 'Stay', detail: 'Beach Hut/Shack', price: '₹1,800' },
                { category: 'Food', detail: 'Sea Food & Beach Cafe', price: '₹1,500' },
                { category: 'Local', detail: 'Beach Trekking (Free!)', price: '₹500' }
            ],
            tip: 'Skip the expensive cabs; trek from Kudle to Half Moon beach for the best views.'
        }
    }
];

const grid = document.getElementById('destinations-grid');
const modal = document.getElementById('budget-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-modal');

function renderCards() {
    grid.innerHTML = destinations.map(dest => `
        <div class="card" onclick="openModal('${dest.id}')">
            <img src="${dest.image}" alt="${dest.title}" class="card-img">
            <div class="card-content">
                <span class="card-tag">${dest.tag}</span>
                <h3 class="card-title">${dest.title}</h3>
                <p>Starting at ${dest.budget.total}</p>
            </div>
        </div>
    `).join('');
}

function openModal(id) {
    const dest = destinations.find(d => d.id === id);
    if (!dest) return;

    modalBody.innerHTML = `
        <h2 style="font-size: 3rem; margin-bottom: 0.5rem;">${dest.title}</h2>
        <p style="color: var(--accent-color); font-weight: 600; margin-bottom: 2rem;">Total Budget: ${dest.budget.total} for ${dest.budget.days} Days</p>
        
        <div class="budget-grid">
            ${dest.budget.breakdown.map(item => `
                <div class="budget-item">
                    <h4>${item.category}</h4>
                    <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.5rem;">${item.detail}</p>
                    <div class="price">${item.price}</div>
                </div>
            `).join('')}
        </div>

        <div style="margin-top: 3rem; padding: 2rem; background: rgba(56, 189, 248, 0.1); border-radius: 20px; border: 1px dashed var(--accent-color);">
            <h4 style="color: var(--accent-color); margin-bottom: 0.5rem;">PRO TIP</h4>
            <p>${dest.budget.tip}</p>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scroll
}

closeBtn.onclick = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// Initialize
renderCards();
