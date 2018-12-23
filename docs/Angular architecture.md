# Архитектура проекта на Angular

## Файловая структура

**e2e** – тестирование

### src

**app** – главный компонент приложения. Основные файлы каждого компонента:
- *.module.ts
- *.component.ts
- *.*.html
- *.*.css
- *-routing.module.ts (если при создании проекта выбран Angular роутинг)

#### Главные файлы приложения

- index.html
- styles.css
- main.ts
- test.ts

## Точка входа в приложение

Файл `/src/index.html` содержит тег <app-root>, вызывающий главный компонент и являющийся точкой входа в приложение.

## Bootstrapping

В файле `/src/main.ts` описан процесс инициализации проекта. Инициализация главного компонента:

```typescript
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

Также здесь есть механизм оптимизации для продакшн:

```typescript
if (environment.production) {
  enableProdMode();
}
```
