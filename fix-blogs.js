const fs = require('fs');
const content = fs.readFileSync('data/blogs.json', 'utf8');

// Find all ] in the file
let closeBrackets = [];
for (let i = 0; i < content.length; i++) {
  if (content[i] === ']') {
    closeBrackets.push({
      pos: i,
      context: content.substring(Math.max(0, i - 10), Math.min(content.length, i + 20))
    });
  }
}

console.log('Found', closeBrackets.length, 'closing brackets');
closeBrackets.forEach((b, idx) => {
  console.log(`${idx}: pos ${b.pos} - "${b.context.replace(/\n/g, '\\n')}"`);
});

// The main array closing bracket should be one of the last ones
// Find the one where everything after is just whitespace or garbage
for (let i = closeBrackets.length - 1; i >= 0; i--) {
  const pos = closeBrackets[i].pos;
  const afterClose = content.substring(pos + 1).trim();
  if (afterClose === '') {
    console.log('\n✓ Main array ends at position', pos);
    const fixed = content.substring(0, pos + 1);
    fs.writeFileSync('data/blogs.json', fixed);
    console.log('✓ File truncated and saved');

    // Verify
    try {
      const json = JSON.parse(fs.readFileSync('data/blogs.json', 'utf8'));
      console.log('✓ JSON is now valid with', json.length, 'posts');
    } catch (e) {
      console.log('✗ Still invalid:', e.message.substring(0, 80));
    }
    break;
  }
}
