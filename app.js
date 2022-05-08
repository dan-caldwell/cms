import Alpine from 'alpinejs';
import { CreatePost } from './src/views/components/CreatePost';

window.Alpine = Alpine;

Alpine.data('CreatePost', CreatePost);

Alpine.start();