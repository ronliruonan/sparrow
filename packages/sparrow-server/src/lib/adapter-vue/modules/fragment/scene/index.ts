export function initBlock (index: number) {
  return `
    <div class="block-list">
      <box :index="${index}" class="block-item">
      </box>
    </div>`
}

export function blockList (index: number) {
  return `
    <div class="block-list">
      <box :index="${index}" class="block-item">
      </box>
    </div>
  `;
}

export function paragraph () {
  return `
    <paragraph></paragraph>
  `;
}