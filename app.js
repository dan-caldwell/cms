import Alpine from 'alpinejs';
import morph from '@alpinejs/morph';
import { CreatePost } from './src/views/components/CreatePost';
import { ViewPost } from './src/views/components/ViewPost';

window.Alpine = Alpine;
Alpine.plugin(morph);

Alpine.data('CreatePost', CreatePost);
Alpine.data('ViewPost', ViewPost);

Alpine.start();