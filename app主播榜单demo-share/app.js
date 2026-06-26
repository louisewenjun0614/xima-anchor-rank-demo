const rankData = {
  main: {
    title: "主播影响力榜",
    cycle: "W1 · 2026.06.10-06.16",
    notice: "根据商业价值、内容价值、用户影响力综合排序｜每日校验异常数据",
    rule: "主榜用于识别平台标杆与商业价值主播：商业价值 40% + 内容价值 30% + 用户影响力 30%。展示侧强调收入贡献、内容消费和粉丝关系沉淀。",
    rail: ["全站"],
    rows: [
      ["大斌", "头部", "泛娱乐-网文", 0.779, "收入 13.2万", "分享 2179", "新增粉 9705"],
      ["奇喵君故事", "头部", "儿童", 0.768, "收入 3.2万", "分享 1958", "新增粉 4990"],
      ["头陀渊讲故事", "头部", "泛娱乐-网文", 0.762, "收入 2.3万", "分享 8945", "新增粉 2.0万"],
      ["有声的紫襟", "头部", "泛娱乐-网文", 0.752, "收入 2.3万", "分享 6472", "新增粉 1.6万"],
      ["多多罗", "头部", "儿童", 0.742, "收入 1.6万", "分享 1576", "新增粉 5450"],
      ["曾仕强学堂", "腰部", "泛价值-内容生态", 0.700, "收入 3704", "eDAU 24", "新增粉 3575"],
      ["宝宝巴士", "头部", "儿童", 0.694, "收入 2409", "分享 2752", "新增粉 8202"],
      ["一刀苏苏", "头部", "泛娱乐-网文", 0.690, "收入 1.2万", "分享 2286", "新增粉 5770"],
      ["天马座动画剧场", "腰部", "儿童", 0.690, "收入 2355", "eDAU 2", "新增粉 4782"],
      ["米小圈", "头部", "儿童", 0.688, "收入 5835", "分享 749", "新增粉 4847"],
      ["瓜子听书", "腰部", "泛娱乐-网文", 0.684, "收入 13.7万", "分享 74", "新增粉 1466"],
      ["小默127127", "腰部", "泛影视-影视故事", 0.683, "收入 2.4万", "分享 181", "新增粉 485"]
    ]
  },
  growth: {
    title: "成长突破榜",
    cycle: "W1 · 2026.06.11-06.17",
    notice: "聚焦高潜跃迁和新锐增长｜主榜在榜主播不可逆向进入成长榜",
    rule: "成长榜用于发现腰部高潜与新锐面孔：用户吸引力增长 50% + 商业价值增长 50%。页面突出增长率、eDAU 和跃迁信号。",
    rail: ["全站"],
    rows: [
      ["重塑心灵心理训练中心", "腰部", "泛娱乐-音乐", 1.016, "收入 +1010%", "eDAU 1.9万", "得分 1.016"],
      ["混知FM", "腰部", "儿童", 0.891, "收入 1.3万", "eDAU +7.3%", "得分 0.891"],
      ["小鹿小鹿工作室", "腰部", "泛价值-曲艺", 0.749, "收入 +220%", "eDAU 3.4万", "得分 0.749"],
      ["霓达播客NidaMedia", "腰部", "泛影视-影视故事", 0.734, "收入 2812", "eDAU +5.6%", "播客候选"],
      ["昆虫大叔", "腰部", "泛影视-影视故事", 0.619, "eDAU 4.4万", "eDAU +23.5%", "得分 0.619"],
      ["不熬夜文史局", "腰部", "泛价值-内容生态", 0.600, "eDAU 2.1万", "eDAU +51.8%", "得分 0.600"],
      ["王金鑫老师", "腰部", "儿童", 0.556, "收入 4832", "eDAU 1.5万", "得分 0.556"],
      ["开心锤锤", "腰部", "儿童", 0.549, "eDAU 11.0万", "eDAU +11.5%", "新锐流量"],
      ["多彩故事树", "腰部", "儿童", 0.492, "eDAU 1.4万", "eDAU +10.0%", "得分 0.492"],
      ["天地童声", "腰部", "儿童", 0.461, "eDAU 3.2万", "eDAU +9.7%", "得分 0.461"],
      ["十三妖仙学院", "腰部", "儿童", 0.437, "eDAU 1.4万", "eDAU +9.2%", "得分 0.437"],
      ["剧舞吧小宇宙", "腰部", "泛娱乐-网文", 0.434, "eDAU 10.3万", "eDAU +150.9%", "跃迁信号"]
    ]
  },
  category: {
    title: "品类创作者榜",
    cycle: "W1 · 2026.06.18-06.24",
    notice: "品类内相对表现排序｜突出专业供给、真实消费和用户粘性",
    rule: "品类榜不直接承担收入指标：真实消费深度 50% + 用户关系沉淀 50%。支持双榜在榜，适合作为品类 showcase 和运营资源承接入口。",
    rail: ["亲子陪伴", "价值表达", "故事演绎", "播客"],
    groups: {
      "亲子陪伴": [
        ["宝宝巴士", "头部", "儿童-儿童故事", 2.000, "播放时长 88.7亿秒", "新增订阅 脱敏", "品类第1"],
        ["多多罗", "头部", "儿童-儿童故事", 1.940, "播放时长 48.9亿秒", "新增订阅 脱敏", "品类第2"],
        ["奇喵君故事", "头部", "儿童-儿童故事", 1.926, "播放时长 31.7亿秒", "新增订阅 脱敏", "品类第3"],
        ["东海小学广播站", "头部", "儿童-儿童故事", 1.843, "播放时长 30.6亿秒", "新增订阅 脱敏", "品类第4"],
        ["米小圈", "头部", "儿童-儿童故事", 1.833, "播放时长 28.0亿秒", "新增订阅 脱敏", "品类第5"],
        ["保林叔叔讲故事", "头部", "儿童-儿童故事", 1.806, "播放时长 18.7亿秒", "新增订阅 脱敏", "品类第6"],
        ["天马座动画剧场", "腰部", "儿童-儿童故事", 1.794, "播放时长 11.1亿秒", "新增订阅 脱敏", "高潜"],
        ["呆瓜叔叔讲故事", "头部", "儿童-儿童故事", 1.780, "播放时长 14.8亿秒", "新增订阅 脱敏", "品类第8"]
      ],
      "价值表达": [
        ["曾仕强学堂", "腰部", "泛价值-内容生态", 1.518, "用户沉淀强", "文化表达", "资源候选"],
        ["曲黎敏", "腰部", "泛价值-内容生态", 1.447, "健康人文", "新增订阅 脱敏", "资源候选"],
        ["相声爱好者", "腰部", "泛价值-曲艺", 1.316, "eDAU 16.1万", "增长稳健", "垂类亮点"],
        ["木马夫人", "腰部", "泛价值-内容生态", 1.249, "eDAU +21.2%", "用户关系增长", "上升中"],
        ["一壶浊酒小聋瞎", "腰部", "泛价值-内容生态", 1.204, "eDAU 2.4万", "内容稳定", "上升中"]
      ],
      "故事演绎": [
        ["小默127127", "腰部", "泛影视-影视故事", 1.526, "收入 2.4万", "故事演绎", "品类代表"],
        ["霓达播客NidaMedia", "腰部", "泛影视-影视故事", 1.416, "eDAU +5.6%", "叙事内容", "跨品类潜力"],
        ["昆虫大叔", "腰部", "泛影视-影视故事", 1.338, "eDAU 4.4万", "用户吸引强", "上升中"],
        ["磨铁图书", "腰部", "泛影视-影视故事", 1.291, "分享 879", "新增粉 4043", "出版物待复核"],
        ["不熬夜文史局", "腰部", "泛价值-内容生态", 1.226, "eDAU +51.8%", "真实故事", "上升中"]
      ],
      "播客": []
    }
  }
};

const tabs = [
  ["main", "主播影响力"],
  ["growth", "成长突破"],
  ["category", "品类榜"],
  ["rules", "榜单机制"]
];

let activeTab = "main";
let activeRail = "全站";
let rulesVisible = false;

const rankTabs = document.querySelector("#rankTabs");
const sideRail = document.querySelector("#sideRail");
const notice = document.querySelector("#notice");
const rankCycle = document.querySelector("#rankCycle");
const rankTitle = document.querySelector("#rankTitle");
const ruleCard = document.querySelector("#ruleCard");
const podium = document.querySelector("#podium");
const rankList = document.querySelector("#rankList");
const ruleToggle = document.querySelector("#ruleToggle");

function avatarText(name) {
  return name.replace(/[A-Za-z0-9]/g, "").slice(0, 2) || name.slice(0, 2);
}

function rowMatches(row, rail) {
  if (rail === "全站") return true;
  return row[2].includes(rail) || row[1].includes(rail);
}

function rowsForCurrentView() {
  if (activeTab === "rules") return [];
  const data = rankData[activeTab];
  if (activeTab === "category") return data.groups[activeRail] || [];
  return data.rows.filter((row) => rowMatches(row, activeRail));
}

function renderTabs() {
  rankTabs.innerHTML = tabs.map(([key, label]) => (
    `<button class="tab ${key === activeTab ? "active" : ""}" type="button" data-tab="${key}">${label}</button>`
  )).join("");
}

function renderRail(data) {
  sideRail.innerHTML = data.rail.map((item) => (
    `<button class="rail-item ${item === activeRail ? "active" : ""}" type="button" data-rail="${item}">${item}</button>`
  )).join("");
}

function renderPodium(rows) {
  podium.innerHTML = rows.slice(0, 3).map((row, index) => (
    `<article class="podium-card">
      <span class="podium-rank">TOP${index + 1}</span>
      <div class="avatar">${avatarText(row[0])}</div>
      <p class="podium-name">${row[0]}</p>
      <p class="podium-meta">${row[2]}</p>
    </article>`
  )).join("");
}

function renderRows(rows) {
  if (!rows.length) {
    rankList.innerHTML = `<div class="empty">播客榜数据还未准备好。建议在此保留入口，展示“数据建设中”状态，并在品类字段、圈选逻辑和运营承接方案确定后自动切换为榜单列表。</div>`;
    return;
  }

  const maxScore = Math.max(...rows.map((row) => row[3]));
  rankList.innerHTML = rows.map((row, index) => {
    const width = Math.max(18, Math.round((row[3] / maxScore) * 100));
    return `<article class="rank-row">
      <div class="rank-num">${index + 1}</div>
      <div class="avatar">${avatarText(row[0])}</div>
      <div class="row-main">
        <div class="name-line">
          <span class="name">${row[0]}</span>
          <span class="badge">${row[1]}</span>
        </div>
        <p class="desc">${row[2]}</p>
        <div class="metric-line">
          <span class="metric-chip">${row[4]}</span>
          <span class="metric-chip">${row[5]}</span>
          <span class="metric-chip">${row[6]}</span>
        </div>
        <div class="score-line">
          <span class="score-track"><span class="score-fill" style="width: ${width}%"></span></span>
          <span class="score-text">${row[3].toFixed(3)}</span>
        </div>
      </div>
    </article>`;
  }).join("");
}

function renderRulesOnly() {
  const data = {
    title: "榜单机制",
    cycle: "MVP 产品化方案",
    notice: "1 个主榜 + 1 个成长通类榜 + 3 个核心品类榜；播客榜待底层字段和业务目标确认",
    rail: ["结构", "准入", "防作弊", "资源"],
    rule: "当前最稳妥路径是基于现有聚合页主播榜低成本改造，同步承接首页双列入口。榜单设置准入门槛、异常数据剔除、人工复核和主播申诉，以保障公信力。"
  };
  notice.textContent = data.notice;
  rankCycle.textContent = data.cycle;
  rankTitle.textContent = data.title;
  ruleCard.classList.add("show");
  ruleCard.innerHTML = data.rule;
  sideRail.innerHTML = data.rail.map((item, index) => (
    `<button class="rail-item ${index === 0 ? "active" : ""}" type="button">${item}</button>`
  )).join("");
  podium.innerHTML = "";
  rankList.innerHTML = `<div class="empty">榜单结构建议：顶部保留“主播榜”统一 IP；二级 tab 承接主播影响力、成长突破、品类榜；品类榜内用左侧 rail 承接亲子陪伴、价值表达、故事演绎、播客。资源侧可按主榜商业化、成长榜流量扶持、品类榜 showcase 分别承接。</div>`;
}

function render() {
  renderTabs();

  if (activeTab === "rules") {
    renderRulesOnly();
    return;
  }

  const data = rankData[activeTab];
  if (!data.rail.includes(activeRail)) activeRail = data.rail[0];
  const rows = rowsForCurrentView();

  notice.textContent = data.notice;
  rankCycle.textContent = data.cycle;
  rankTitle.textContent = activeTab === "category" ? `${activeRail}榜` : data.title;
  ruleCard.innerHTML = data.rule;
  ruleCard.classList.toggle("show", rulesVisible);
  renderRail(data);
  renderPodium(rows);
  renderRows(rows);
}

rankTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-tab]");
  if (!button) return;
  activeTab = button.dataset.tab;
  rulesVisible = false;
  activeRail = activeTab === "category" ? "亲子陪伴" : "全站";
  render();
});

sideRail.addEventListener("click", (event) => {
  const button = event.target.closest("[data-rail]");
  if (!button) return;
  activeRail = button.dataset.rail;
  render();
});

ruleToggle.addEventListener("click", () => {
  rulesVisible = !rulesVisible;
  render();
});

render();
