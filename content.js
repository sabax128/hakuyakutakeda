// 項目はこの配列に追加します。url は https://... または ./games/... で指定できます。
// ABOUTのSNSはsocialsへサービス名・URL・アイコンを追加します。
// ゲームのカセット画像がなければ、タイトル入りの共通カセットを自動表示します。
window.ORBIT_CONTENT = {
 projects: [], // { title, description, url, category }。noteや自サイトの記事URLを追加できます。
 profile: { name: '竹田 伯約', nameEn: 'Hakuyaku Takeda', avatar: './assets/profile-avatar.jpg' },
 socials: [
  { name: 'YouTube', url: 'https://www.youtube.com/@hakuyakutakeda', icon: './assets/social-youtube.svg' },
  { name: 'SoundCloud', url: 'https://soundcloud.com/hakuyaku-takeda', icon: './assets/social-soundcloud.svg' },
  { name: 'Instagram', url: 'https://www.instagram.com/_hakuyaku_/', icon: './assets/social-instagram.svg' },
  { name: 'X', url: 'https://x.com/_hakuyaku_', icon: './assets/social-x.svg' }
 ],
 games: [
  { title: 'てっこつタワー', description: 'ちびロボ「ピコ」を操作して、タワーのてっぺんへ。ネコのミケを助け出すクライミングアクション。', url: 'https://hakuyakutakeda.com/game/tower/', tag: 'CLIMBING ACTION', cartridge: './assets/tower-cartridge.svg' }
 ]
};
