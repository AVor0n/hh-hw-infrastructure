# hh-infrastructure-hw

Задание школы программистов HeadHunter по теме 'Инфраструктура'

Сделать репозиторий на GitHub со сборкой статики и линтерами.

## Почему Vite

Выбрал `Vite`, как любимый сборщик, т.к. не было времени разбираться с чем-то ещё.

К тому же `webpack` и `parcel` всё равно уже настраивал.

Rollup вероятно тот же `Vite`.

`TurboPack`(и `swc`) ещё в бете

У `Biome` собственные линтеры, не уверен, что там бы получилось подключить конфиги HH. Хотя интересно посмотреть.

Из нового разве что `esbuild` (`tsup`) можно было попробовать. Других сборщиков не знаю.

## Какие сложности были

Попробовал сначала `less` подключить, ни разу им не пользовался. `Stylelint` не хотел работать, требовал то кастомный синтаксис, то ещё что-то. Немного поборолся с ним и забил, поставив привычный `scss`.

Подключил `stylelint` конфиг от HH, но там что-то очень много deprecated-варнингов сыпется. Если же понизить версию `stylelint` до `^14`, то два правила становятся нераспознаваемыми, так что отключил этот конфиг, оставив `stylelint/recommended`

Немного удивило, что все зависимости от eslint-config-hh пришлось ставить явно, иначе eslint падал с ошибкой 'пакет X не найден'. Транзитивные зависимости обычно автоматом качаются
