const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

XYAsistance = {}

const labels = MONTHS
const data = {
  labels: labels,
  datasets: [{
    label: 'Assistance',
    data: [1, 7, 8],
    fill: false,
    borderColor: '#000080',
    tension: 0.1
  }]
};

const config = {
  type: 'line',
  data: data,
};

const ctx = document.getElementById('assistance-chart');

new Chart(ctx, config);