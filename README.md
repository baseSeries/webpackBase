## webpack5 基础学习

type:'asset'
generator:{
filename:'img/[hash:8]\_[name][ext]
}
parser:{
dataUrlCondition:{
maxSize:100\*1024
}
}

copy({
patterns:[
{
from:'public',
to:'./public',
globOptions:{
ignore:['**/*.html']
}
}
]
})
