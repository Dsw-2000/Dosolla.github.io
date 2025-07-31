+++
title = "教程：航空航天文章Markdown语法指南"
description = "航空航天和太空探索主题的Markdown语法完整指南"
date = 2025-01-27
draft = false
tags = ["教程", "Markdown", "航空航天", "太空", "写作指南"]
categories = ["教程"]
readingTime = "10分钟"
+++

# 航空航天文章Markdown语法教程

本教程提供了完整的Markdown语法指南，专门针对航空航天和太空探索文章。在撰写技术文章时，请将此作为参考。

## 文字格式化

### 基本文字样式

**粗体文字**用于强调重要概念，如**轨道力学**和**推进系统**。

*斜体文字*非常适合突出术语，如*推重比*和*比冲*。

***粗体加斜体***可以组合使用，用于***关键安全参数***。

### 删除线和下划线

~~删除线~~用于显示过时信息，如~~阿波罗11号是第一次载人任务~~（实际上，它是第一次登月任务）。

<u>下划线文字</u>可以强调重要警告或注释。

## 标题和结构

# H1 - 文章主标题
## H2 - 主要章节
### H3 - 子章节
#### H4 - 小章节
##### H5 - 微小章节
###### H6 - 最小章节

## 列表

### 无序列表

- **火箭推进系统**
  - 液体燃料发动机
  - 固体火箭助推器
  - 混合推进
  - 电推进

### 有序列表

1. **太空任务阶段**
   1. 发射准备
   2. 上升阶段
   3. 轨道插入
   4. 任务执行
   5. 再入和着陆

### 混合列表

- **飞机系统**
  1. 航空电子设备
  2. 飞行控制系统
  3. 电源分配
- **航天器组件**
  1. 生命保障系统
  2. 通信阵列
  3. 热管理系统

## 链接和引用

### 基本链接

访问[NASA官方网站](https://www.nasa.gov)了解最新太空任务。

### 带标题的链接

查看[国际空间站](https://www.nasa.gov/station "ISS - 人类在太空的家")获取实时更新。

### 内部链接

阅读我们关于[航空声音设计](/online_reports/test-aviation-sound-design/)的文章获取相关内容。

## 图片

### 基本图片

![地球轨道卫星](/image/IMG_5998.JPG)

*图1：绕地球运行的卫星，展示轨道力学*


## 音频和多媒体

### 音频播放器

<audio controls style="width: 100%; margin: 1rem 0;">
  <source src="/audio/Noisy Insects Dia  - Original.wav" type="audio/wav">
  您的浏览器不支持音频元素。
</audio>

*音频：火箭发动机点火序列*

### 多源音频

<audio controls style="width: 100%; margin: 1rem 0;">
  <source src="/audio/Noisy Insects Dia  - Original.wav" type="audio/wav">
  <source src="/audio/Noisy Insects Dia  - Original.wav" type="audio/mpeg">
  您的浏览器不支持音频元素。
</audio>

## 代码和技术内容

### 内联代码

使用 `calculateOrbitalVelocity()` 函数确定航天器速度。

### 代码块

```python
def calculate_orbital_velocity(altitude, planet_mass, planet_radius):
    """
    使用牛顿万有引力定律计算轨道速度
    """
    G = 6.67430e-11  # 万有引力常数
    r = planet_radius + altitude
    
    velocity = (G * planet_mass / r) ** 0.5
    return velocity

# 使用示例
earth_mass = 5.972e24  # kg
earth_radius = 6.371e6  # m
leo_altitude = 400e3    # m (400 km)

leo_velocity = calculate_orbital_velocity(leo_altitude, earth_mass, earth_radius)
print(f"低地球轨道速度: {leo_velocity:.0f} m/s")
```

### JavaScript示例

```javascript
// 航天器轨迹计算
class TrajectoryCalculator {
    constructor(initialPosition, initialVelocity) {
        this.position = initialPosition;
        this.velocity = initialVelocity;
        this.gravity = 9.81; // m/s²
    }
    
    updatePosition(deltaTime) {
        // 简单物理模拟
        this.velocity.y -= this.gravity * deltaTime;
        this.position.x += this.velocity.x * deltaTime;
        this.position.y += this.velocity.y * deltaTime;
        
        return this.position;
    }
}
```

### HTML示例

```html
<!-- 太空任务状态显示 -->
<div class="mission-status">
    <h3>任务: 阿耳忒弥斯II</h3>
    <div class="status-indicator">
        <span class="status active">进行中</span>
        <span class="crew">机组: 4名宇航员</span>
        <span class="duration">持续时间: 10天</span>
    </div>
    <audio controls>
        <source src="/audio/mission-communications.wav" type="audio/wav">
    </audio>
</div>
```

## 引用和引述

### 简单引用

> "这是个人的一小步，却是人类的一大步。"
> 
> — 尼尔·阿姆斯特朗，阿波罗11号

### 嵌套引用

> **任务控制中心**: "休斯顿，我们遇到了问题。"
> 
> > **阿波罗13号机组**: "我们需要节省电力和氧气。"
> > 
> > > **飞行主任**: "让我们解决问题，伙计们。"

### 技术引用

> **轨道力学原理**: 
> 卫星的轨道速度与其轨道半径的平方根成反比。这个基本关系支配着太空中所有航天器的轨迹。

## 表格

### 基本表格

| 组件 | 质量 (kg) | 功能 |
|------|-----------|------|
| 推进模块 | 2,500 | 主发动机和燃料 |
| 指令模块 | 1,200 | 机组舱室和控制 |
| 服务模块 | 800 | 生命保障和电源 |
| 登月模块 | 1,600 | 月球着陆和上升 |

### 复杂表格

| 任务 | 发射日期 | 持续时间 | 机组 | 状态 |
|------|----------|----------|------|------|
| 阿波罗11号 | 1969年7月16日 | 8天 | 3人 | ✅ 已完成 |
| 阿波罗13号 | 1970年4月11日 | 6天 | 3人 | ⚠️ 中止 |
| 阿耳忒弥斯I | 2022年11月16日 | 25天 | 0人 | ✅ 已完成 |
| 阿耳忒弥斯II | 2025年 | 10天 | 4人 | 🚀 计划中 |

## 数学表达式

### 内联数学

火箭方程是：`Δv = v_e * ln(m_0/m_f)`

### 块级数学

轨道周期可以使用以下公式计算：

```
T = 2π * √(a³/μ)
```

其中：
- T = 轨道周期
- a = 半长轴
- μ = 引力参数

## 任务列表

### 任务检查清单

- [x] 飞行前系统检查
- [x] 机组体检
- [x] 天气评估
- [ ] 最终倒计时序列
- [ ] 发射窗口验证
- [ ] 任务中止程序审查

### 开发任务

- [ ] 设计推进系统
- [ ] 测试热防护
- [ ] 验证生命保障
- [ ] 集成航空电子设备
- [ ] 进行安全审查

## 水平分割线

使用水平分割线分隔主要章节：

---

## 高级格式化

### 定义列表

**远地点**
: 轨道上距离地球最远的点。

**近地点**
: 轨道上距离地球最近的点。

**比冲**
: 火箭发动机效率的度量，以秒为单位。

### 脚注

土星五号火箭[^1]仍然是人类建造的最强大的火箭。

[^1]: 土星五号用于阿波罗任务，可以将140,000公斤载荷送入低地球轨道。

### 缩写

<abbr title="美国国家航空航天局">NASA</abbr>领导太空探索工作。

<abbr title="国际空间站">ISS</abbr>在400公里高度绕地球运行。

## 最佳实践

### 文件组织

```
content/online_reports/
├── your-article.md
├── another-article.md
└── tutorial.md

static/
├── image/
│   ├── your-diagram.png
│   └── mission-photo.jpg
└── audio/
    ├── engine-sound.wav
    └── communications.mp3
```

### 命名规范

- **文章**: 使用kebab-case (`space-propulsion-systems.md`)
- **图片**: 使用描述性名称 (`saturn-v-launch.jpg`)
- **音频**: 使用清晰标识符 (`rocket-engine-startup.wav`)

### 内容结构

1. **引言** - 吸引读者
2. **技术背景** - 提供上下文
3. **主要内容** - 详细解释
4. **示例** - 实际应用
5. **结论** - 总结和下一步

---

## 快速参考

| 元素 | 语法 | 示例 |
|------|------|------|
| 粗体 | `**text**` | **重要** |
| 斜体 | `*text*` | *强调* |
| 链接 | `[text](url)` | [NASA](https://nasa.gov) |
| 图片 | `![alt](path)` | ![火箭](/image/rocket.jpg) |
| 代码 | `` `code` `` | `function()` |
| 列表 | `- item` | - 项目符号 |
| 引用 | `> text` | > 引用 |

---

*本教程作为撰写航空航天和太空探索文章的Markdown语法综合参考。请在写作过程中将此页面加入书签以便快速访问。* 