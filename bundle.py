import re

def strip_es_modules(content):
    # Remove import lines
    content = re.sub(r'import\s+.*?from\s+[\'\"].*?[\'\"];?\n?', '', content)
    # Replace export const / export function / export class with just const / function / class
    content = re.sub(r'export\s+(const|let|var|function|class)\s+', r'\1 ', content)
    # Remove export default or export { ... }
    content = re.sub(r'export\s+default\s+.*?;?', '', content)
    content = re.sub(r'export\s*\{.*?\};?', '', content)
    return content

files = ['js/content.js', 'js/visual-assets.js', 'js/questions.js', 'js/audio.js', 'js/app.js']
bundled = '(function() {\n"use strict";\n\n'

for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        bundled += f'// --- FILE: {f} ---\n'
        bundled += strip_es_modules(fp.read()) + '\n\n'

bundled += '})();\n'

with open('js/bundle.js', 'w', encoding='utf-8') as fp:
    fp.write(bundled)

print('Bundled successfully into js/bundle.js, length:', len(bundled))
