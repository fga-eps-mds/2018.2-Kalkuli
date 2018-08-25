
```
$ npm install
```
Uma pasta chamada node_modules será criada contendo as dependências do projeto.

## Iniciando o servidor local:

```
$ npm start
```
o script de start está linkado com o --watch do Sass

## Sass(.scss)

### Variáveis:
```
$cor-primaria: #FFF;
$cor-secundaria: #000;
$cor-sombra: #ccc;
.card {
    width: 100px;
    border: 1px solid $cor-secundaria;
    background-color: $cor-primaria;
    box-shadow: 1px 1px 5px $cor-sombra;
}
```

### Nesting/Aninhamento:
```
$cor-primaria: #eee;
.navigation {
    list-style: none;
    li {
        display: inline-block;
        padding: 10px;
        &:hover {
            background-color: lighten($cor-primaria, 10%);
        }
    }
}
```

### Mixin:
DRY: Don't Repeat Yourself
```
@mixin button-styling($bg-color, $border-color) {
  background-color: $bg-color;
  border: 2px solid $border-color;
  width: 100px;
  height: 10px;
  text-align: center;
  padding:30px;
  border-radius: 20px;
}

.button--danger {
    @include button-styling(red, black);
}
.button--success {
    @include button-styling(green, black);
}
```