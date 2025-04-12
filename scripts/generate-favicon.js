import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';

// Create a 32x32 canvas
const canvas = createCanvas(32, 32);
const ctx = canvas.getContext('2d');

// Background
ctx.fillStyle = '#2a6b90';

// Draw rounded rectangle
const radius = 5;
const width = 32;
const height = 32;

ctx.beginPath();
ctx.moveTo(radius, 0);
ctx.lineTo(width - radius, 0);
ctx.quadraticCurveTo(width, 0, width, radius);
ctx.lineTo(width, height - radius);
ctx.quadraticCurveTo(width, height, width - radius, height);
ctx.lineTo(radius, height);
ctx.quadraticCurveTo(0, height, 0, height - radius);
ctx.lineTo(0, radius);
ctx.quadraticCurveTo(0, 0, radius, 0);
ctx.closePath();
ctx.fill();

// Text
ctx.fillStyle = 'white';
ctx.font = 'bold 16px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('VKS', 16, 16);

// Save to file
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync(path.join('static', 'favicon.png'), buffer);

console.log('Favicon generated successfully at static/favicon.png');
