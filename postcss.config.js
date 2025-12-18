export default {
    plugins: {
        'postcss-preset-env': {
            stage: 1,
            features: {
                'nesting-rules': true,
                // 'oklch-function': true  <-- REMOVED: Causing error, handled by stage 1 or native support
            }
        },
        autoprefixer: {},
    },
}