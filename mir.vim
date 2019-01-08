let SessionLoad = 1
if &cp | set nocp | endif
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~\work\mir
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +20 ~\work\mir\index.html
badd +26 ~\work\mir\css\main.css
badd +30 ~\work\mir\js\main.js
badd +1 c:\src
badd +83 c:\src\Trupanion\Main\Src\MemberPortal\Trupanion.MemberPortal.WebSite\Scripts\App\claimWizard.ts
argglobal
silent! argdel *
$argadd index.html
set lines=70 columns=215
edit ~\work\mir\index.html
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
wincmd t
set winminheight=1 winheight=1 winminwidth=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 118 + 107) / 215)
exe 'vert 2resize ' . ((&columns * 96 + 107) / 215)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
58,144fold
let s:l = 39 - ((38 * winheight(0) + 34) / 68)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
39
normal! 05|
wincmd w
argglobal
if bufexists('~\work\mir\css\main.css') | buffer ~\work\mir\css\main.css | else | edit ~\work\mir\css\main.css | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 134 - ((36 * winheight(0) + 34) / 68)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
134
normal! 05|
wincmd w
2wincmd w
exe 'vert 1resize ' . ((&columns * 118 + 107) / 215)
exe 'vert 2resize ' . ((&columns * 96 + 107) / 215)
tabnext 1
if exists('s:wipebuf') && s:wipebuf != bufnr('%')
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToOc
set winminheight=1 winminwidth=1
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
